import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { Person } from 'src/model/person';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { ISubject, IColumn } from 'src/model/subject';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<PersonsComponent>, 
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
