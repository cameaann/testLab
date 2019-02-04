import { Component, OnInit } from '@angular/core';
import { PERSONS } from 'src/db-data-persons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'labTest';

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
