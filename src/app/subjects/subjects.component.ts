import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { ISubject } from 'src/model/subject';
import { SubjectService } from '../services/subject.service';
import { DISABLED } from '@angular/forms/src/model';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<SubjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ISubject, private SubjectService: SubjectService,
    private el: ElementRef) {

    this.dataSource = new MatTableDataSource(data.items);
  }

  dataSource: MatTableDataSource<any>;
  pickedRow = null;

  get displayedColumns() {
    return this.columns.map(c => c.property)
  };

  get title() { return this.data.title; }

  get columns() { return this.data.columns; }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  onCloseConfirm() {
    this.SubjectService.addSubject(this.pickedRow, this.data.title);
    this.thisDialogRef.close(this.pickedRow);
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

  pickRow(row) {
    if (this.check(row)) {
      this.pickedRow = row;
    } else {
      this.pickedRow = null;
    }
  }

  calcAge(bdate) { // birthday is a date 
    var birthday = new Date(bdate.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  check(current) {
    var selected = this.SubjectService.checkSel(current);
    if (selected !== null) {
      let age = this.calcAge(selected.birthday || current.birthday);
      if (age > current.max_age || age < current.min_age ||
        age > selected.max_age || age < selected.min_age) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  }

  addClass(val) {
    if (!this.check(val)) {
      return { "noPick": true }
    } else {
      return { "noPick": false }
    }
  }
}
