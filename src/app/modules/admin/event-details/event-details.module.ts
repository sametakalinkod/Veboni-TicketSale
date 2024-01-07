import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EventMainResRequestModule } from './event-main-res-request/event-main-res-request.module';
import { EventMainResPaymentModule } from './event-main-res-payment/event-main-res-payment.module';

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
    EventMainResRequestModule,
    EventMainResPaymentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventDetailsComponent]
})
export class EventDetailsModule { }
