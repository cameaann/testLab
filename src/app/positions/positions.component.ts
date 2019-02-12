import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { POSITIONS } from 'src/db-data-positions';


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef <PositionsComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  positions: Position[] = POSITIONS;
  displayedColumns: string[] = ['name', 'min_age', 'max_age'];
  pickedRow = null;
  

  dataSource = new MatTableDataSource(this.positions);
  
  @ViewChild(MatSort) sort: MatSort;
  
  @Input()
  position: Position;

  ngOnInit() {
    console.log(this.positions);
    this.dataSource.sort = this.sort;
  }
  
  onCloseConfirm(){
    if(this.pickedRow === undefined){
    }
      this.thisDialogRef.close(this.pickedRow);
  }

  onCloseCancel(){
      this.thisDialogRef.close();
  }

  pickRow(row){
    this.pickedRow = row;
    console.log(row);
  }


}
