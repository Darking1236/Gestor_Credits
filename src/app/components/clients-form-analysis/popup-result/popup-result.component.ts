import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-result',
  templateUrl: './popup-result.component.html',
  styleUrls: ['./popup-result.component.css']
  
})
export class PopupResultComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef:MatDialogRef<PopupResultComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

}
