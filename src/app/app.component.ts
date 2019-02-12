import { Component, OnInit } from '@angular/core';
import { PERSONS } from 'src/db-data-persons';
import { ISubject } from 'src/model/subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'labTest';

  personsSubject: ISubject = {
    title: "Persons",
    items: PERSONS,
    columns: [
      { property: 'lastname', title: 'Last Name', sortable: true }, 
      { property: 'firstname', title: 'First name' }, 
      { property: 'middlename', title: 'Middle Name' }, 
      { property: 'birthday', title: 'Birthday' }
    ]
  };

  persons = PERSONS;
  clicked =  false;

  ngOnInit(){
  }

  show(){
    return this.clicked = true;
  }

  close(){
    return this.clicked = false; 
  }

}
