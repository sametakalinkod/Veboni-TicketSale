import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EventMainResPaymentComponent } from './event-main-res-payment/event-main-res-payment.component';
import { EventMainResRequestComponent } from './event-main-res-request/event-main-res-request.component';
import { EventDetailsBasketComponent } from './dialogs/event-details-basket/event-details-basket.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: ':id',
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventDetailsComponent,
    EventMainResPaymentComponent,
    EventMainResRequestComponent,
    EventDetailsBasketComponent
  ]
})
export class EventDetailsModule { }
