import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule,
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
