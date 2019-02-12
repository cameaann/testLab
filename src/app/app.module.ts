import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { MatDialogModule, MatTableModule, MatSort, MatSortModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { DialogModComponent } from './dialog-mod/dialog-mod.component';
import { MatSelectModule } from '@angular/material/select';
import { PositionsComponent } from './positions/positions.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    DialogModComponent,
    SubjectsComponent,
    PositionsComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [
    SubjectsComponent,
    PositionsComponent 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

