import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { SliderAnimatedDirective } from '../common/directives/slider-animated.directive';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule,
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    TranslocoModule,
    MaterialModule,
    FormsModule],
  declarations: [HomeComponent,
    SliderAnimatedDirective]
})
export class HomeModule { }
