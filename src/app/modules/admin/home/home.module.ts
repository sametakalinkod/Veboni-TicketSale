import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule,
    CommonModule,
    MatBadgeModule,
    MatIconModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
