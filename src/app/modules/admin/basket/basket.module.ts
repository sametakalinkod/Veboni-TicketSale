import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/common/modules/transloco/transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule
    // TranslocoModule,
    //TranslocoRootModule
  ],
  declarations: [BasketComponent]
})
export class BasketModule { }
