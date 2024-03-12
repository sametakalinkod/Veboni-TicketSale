import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { register } from 'swiper/element/bundle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmptyComponent } from './empty/empty.component';
import { NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderModule } from 'ngx-ui-loader';




const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'white',
  bgsOpacity: 1,
  bgsPosition: 'bottom-right',
  bgsSize: 0,
  bgsType: 'three-bounce',
  blur: 0,
  delay: 0,
  fastFadeOut: true,
  fgsColor: 'rgba(255,255,255,1)',
  fgsPosition: 'center-center',
  fgsSize: 110,
  fgsType: 'three-strings',
  gap: 10,
  // logoPosition: 'center-center',
  // logoSize: 110,
  // logoUrl: '/assets/images/logo/newLogo.svg',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(17, 24, 39,0.85)',
  pbColor: 'white',
  pbDirection: 'ltr',
  pbThickness: 7,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300
};


@NgModule({
  declarations: [
    AppComponent, EmptyComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'veboni-ticket' }),
    CommonModule,
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
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    // NgcCookieConsentModule.forRoot(new NgcCookieConsentConfig),
    MatFormFieldModule,
    MatInputModule,
    // MatDatepickerModule,
    // MatStepperModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
