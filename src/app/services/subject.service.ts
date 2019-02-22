import { Injectable } from '@angular/core';
import { checkNoChanges } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  person = null;
  position = null;

  constructor() { }

  checkSel(val) {
    if(this.person && val.max_age){
      return this.person;
    }
    else if(this.position && val.birthday){
      return this.position
    }
    else{
      return null;
    }
  }

  addSubject(val, title) {
    if (title === "Persons") {
      this.person = val;
    }

    else if (title === "Positions") {
      this.position = val;
    }

  

  }


}

