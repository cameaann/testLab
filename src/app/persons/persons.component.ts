import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/model/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor() { }

  @Input()
  person: Person;

  ngOnInit() {
    console.log(this.person);
  }

}
