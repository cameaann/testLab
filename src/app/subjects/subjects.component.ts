import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { ISubject } from 'src/model/subject';
import { SubjectService } from '../services/subject.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<SubjectsComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: ISubject, private SubjectService: SubjectService) { 
    
    this.dataSource = new MatTableDataSource(data.items);
  }

  dataSource: MatTableDataSource<any>;
  pickedRow = null;


  get displayedColumns() { 
    return this.columns.map(c=>c.property)
  };

  get title() { return this.data.title; }

  get columns() { return this.data.columns; }
  
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
    }
  
  onCloseConfirm(){
      var approved = this.SubjectService.checkSelection(this.pickedRow, this.data.title);
      if(approved){
        this.thisDialogRef.close(this.pickedRow);
      }      
  }

  onCloseCancel(){
      this.thisDialogRef.close();
  }

  pickRow(row){
    this.pickedRow = row;
  }
}
