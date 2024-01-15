import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Veboni-TicketSale';

  // constructor(
  //   private _translocoService: TranslocoService,
  // ) {
  //   this._translocoService.setActiveLang('tr');

  // }

  // async ngOnInit(): Promise<void> {
  //   this._translocoService.langChanges$.subscribe((res) => {
  //     //this.languageChanged();
  //   });

  //   if (this._translocoService.getActiveLang() == 'tr') {
  //     // this.message = "Bu web sitesi deneyiminizi en iyi şekilde yaşamanız için çerezleri kullanır."
  //     // this.details = "Çerez politikamız hakkında detaylı bilgi sahibi olmak için tıklayınız."
  //     // this.button = "Kabul Et!"
  //   }
  // }
}
