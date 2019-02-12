import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SubjectsComponent } from '../subjects/subjects.component';
import { ISubject } from 'src/model/subject';


@Component({
  selector: 'app-dialog-mod',
  templateUrl: './dialog-mod.component.html',
  styleUrls: ['./dialog-mod.component.css']
})
export class DialogModComponent implements OnInit {

  @Input() subject: ISubject;

  dialogResult = "";

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }

  openPersons() {
    let dialogRef = this.dialog.open(SubjectsComponent, {
      width: '600px',
      data: this.subject
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogResult = result;
        console.log(this.dialogResult);
      }

    })
  }

}
