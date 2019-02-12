import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog-component/my-dialog-component';
import { PersonsComponent } from '../persons/persons.component';


@Component({
  selector: 'app-dialog-mod',
  templateUrl: './dialog-mod.component.html',
  styleUrls: ['./dialog-mod.component.css']
})
export class DialogModComponent implements OnInit {

  dialogResult = "";

  constructor(public dialog: MatDialog) { }
  // @Inject(MAT_DIALOG_DATA) public data: any/

  ngOnInit() {
  }

  openPersons() {
    let dialogRef = this.dialog.open(PersonsComponent, {
      width: '600px',
      data: 'This text is passed into the dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogResult = result;
        console.log(this.dialogResult);
      }

    })
  }

}
