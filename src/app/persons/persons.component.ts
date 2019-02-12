import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { Person } from 'src/model/person';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { PERSONS } from 'src/db-data-persons';
import { ISubject, IColumn } from 'src/model/subject';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<PersonsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: ISubject) { 
    
    this.title = data.title;
    this.columns = data.columns;
    this.displayedColumns = data.columns.map(c => c.property);
  }

  persons: Person[] = PERSONS;
  displayedColumns: string[];
  pickedRow = null;
  title: string;
  columns: IColumn[];
  

  dataSource = new MatTableDataSource(this.persons);
  
  @ViewChild(MatSort) sort: MatSort;
  
  @Input()
  person: Person;

  ngOnInit() {
    console.log(this.persons);
    this.dataSource.sort = this.sort;
  }
  
  onCloseConfirm(){
    // if(this.pickedRow === undefined){
      this.thisDialogRef.close(this.pickedRow);
    // }  
  }

  onCloseCancel(){
      this.thisDialogRef.close();
  }

  pickRow(row){
    this.pickedRow = row;
    console.log(row);
  }



}
