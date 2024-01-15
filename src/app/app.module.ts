import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './layout/footer/footer.module';
import { HeaderModule } from './layout/header/header.module';
import { CommonModule } from '@angular/common';
import { EventDetailsModule } from './modules/admin/event-details/event-details.module';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './modules/admin/home/home.module';
import { BasketModule } from './modules/admin/basket/basket.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from './common/modules/transloco/transloco-root.module';
import { MaterialModule } from './common/modules/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslocoModule } from '@ngneat/transloco/lib/transloco.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CommonModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    BasketModule,
    EventDetailsModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    // TranslocoModule,
    //TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
