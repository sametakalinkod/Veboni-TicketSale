import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    AppServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
