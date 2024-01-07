import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './modules/admin/home/home.component';
import { EventDetailsComponent } from './modules/admin/event-details/event-details.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EventPaymentComponent } from './modules/admin/event-payment/event-payment.component';
import { InitialDataResolver } from './app.resolvers';



const routes: Routes = [
  {
    path: "", component: HomeComponent
    // ,
    // resolve: {
    //   initData: InitialDataResolver
    // }
  },
  { path: "", component: HeaderComponent },
  { path: "", component: FooterComponent },
  { path: "eventdetails", component: EventDetailsComponent },
  { path: "payment", component: EventPaymentComponent }
];



@NgModule({
  imports: [BrowserModule, CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserModule, CommonModule]
})
export class AppRoutingModule { }
