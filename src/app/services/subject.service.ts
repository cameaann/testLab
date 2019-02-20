import { Injectable } from '@angular/core';
import { checkNoChanges } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    person = null;
    position = null;

  calcAge(bdate) { // birthday is a date
    var birthday = new Date(bdate.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  constructor() { }

  checkSelection(val, title){
    if(title === "Persons"){
      this.person = val;
      if(this.position){
       var age = this.calcAge(this.person.birthday);
       if(age >= this.position.max_age || age <= this.position.min_age){
          console.log("Выбранный сотрудник не подходит по возрасту. Вы уверены, что хотите выбрать этого сотрудника?");
          
          return false;
       }
      }
      return true;
    }

    else if(title === "Positions"){
      if(this.person){
       this.position = val;
       var age = this.calcAge(this.person.birthday);
       if(age >= this.position.max_age || age <= this.position.min_age){
          console.log("Выбранная должность не подходит по возрасту сотруднику. Вы уверены, что хотите выбрать эту должность?");
          
          return false;
       }
       
      }
      return true;
    }

    console.log(this.person, this.position);
    
  }


}

