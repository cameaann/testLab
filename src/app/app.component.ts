import { Component, OnInit } from '@angular/core';
import { PERSONS } from 'src/db-data-persons';
import { ISubject } from 'src/model/subject';
import { POSITIONS } from 'src/db-data-positions';


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
    ],
    getDisplayName(item) {
      return `${item.lastname} ${item.middlename} ${item.firstname}`;
    }
  };

  positionsSubject: ISubject = {
    title: "Positions",
    items: POSITIONS,
    columns: [
      { property: 'name', title: 'Name', sortable: true },
      { property: 'min_age', title: 'Min age' },
      { property: 'max_age', title: 'Max age' }
    ],
    getDisplayName(item) {
      return `${item.name} (${item.min_age} <=> ${item.max_age})`;
    }
  }

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
