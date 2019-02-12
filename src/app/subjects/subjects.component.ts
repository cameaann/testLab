import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { ISubject } from 'src/model/subject';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<SubjectsComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: ISubject) { 
    
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
      this.thisDialogRef.close(this.pickedRow);
  }

  onCloseCancel(){
      this.thisDialogRef.close();
  }

  pickRow(row){
    this.pickedRow = row;
    console.log(row);
  }
}
