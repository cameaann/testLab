import { Component, OnInit } from '@angular/core';
import { PERSONS } from 'src/db-data-persons';
import { ISubject } from 'src/model/subject';
import { POSITIONS } from 'src/db-data-positions';
import { SUBS } from 'src/db-data-subs';
import { ORGS } from 'src/db-data-orgs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';

  personsSubject: ISubject = {
    title: "Persons",
    items: PERSONS,
    columns: [
      { property: 'lastname', title: 'Last Name', sortable: true }, 
      { property: 'middlename', title: 'First name' }, 
      { property: 'firstname' , title: 'Middle Name' }, 
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
  };

  subsSubject: ISubject = {
    title: "Departments",
    items: SUBS,
    columns: [
      { property: 'name', title: 'Name', sortable: true }
    ],
    getDisplayName(item) {
      return `${item.name}`;
    }
  };

  orgsSubject: ISubject = {
    title: "Organizations",
    items: ORGS,
    columns: [
      { property: 'name', title: 'Name', sortable: true },
      { property: 'country', title: 'Country' },
    ],
    getDisplayName(item) {
      return `${item.name} ${item.country}`;
    }
  };

  ngOnInit(){
  }

}
