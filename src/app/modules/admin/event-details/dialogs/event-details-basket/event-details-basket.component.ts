import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-details-basket',
  templateUrl: './event-details-basket.component.html',
  styleUrls: ['./event-details-basket.component.scss']
})
export class EventDetailsBasketComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
  }

}
