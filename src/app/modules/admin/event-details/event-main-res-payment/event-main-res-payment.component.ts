import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { PmsProductSessionsByIdDto } from 'src/app/common/models/PmsProductSessionsByIdDto';

@Component({
  selector: 'app-event-main-res-payment',
  templateUrl: './event-main-res-payment.component.html',
  styleUrls: ['./event-main-res-payment.component.scss']
})
export class EventMainResPaymentComponent implements OnInit {
  @Input() selectedEventId: string | null = null;
  @Input() html: string | null = null;
  @Input() image: string | null = null;
  @Input() selectedProductData: PmsProductSessionsByIdDto | null = null;
  selectedSeance: any; // Define a property to hold the selected value

  basketItemDetails = [{
    'eventid': "23423423423fgd",
  }]
  constructor(
    private _cookieService: CookieService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component
      this.updateHeader(newCookieValue);
    });
  }

  addBasket(): void {
    const cookie = this._cookieService.getCookie('basketEvents');

    const model = [{
      sessionId: this.selectedProductData?.sessions[0].programDetailId,
      image: this.image,
      date: this.selectedProductData?.programEndDate,
      sessionTime: this.selectedSeance,
      childPrice: this.selectedProductData?.sessions[0].childTicketPrice,
      adultPrice: this.selectedProductData?.sessions[0].ticketPrice,

    }]
    if (cookie) {
      const json = JSON.parse(cookie);
      model.push(...json)
    }

    this._cookieService.setCookie("basketEvents", JSON.stringify(model), 7);
    const sweetAlertDto = new SweetAlertDto(
      'Sepete Eklendi!',
      '',
      SweetalertType.success
    );
    GlobalService.sweetAlert(sweetAlertDto);
    // const dialog = this._dialog.open(EventDetailsBasketComponent, {
    //   disableClose: false,
    //   data: null
    // }).afterClosed().subscribe((err) => {
    //   if (err.status) {
    //     //this.filtersClick();
    //   }
    // });

  }

  updateHeader(newCookieValue: string): void {
    // Your logic to update the header

    console.log('Header updated with new cookie value:', JSON.stringify(newCookieValue));
  }

  selectSeance(): void {

    console.log('Selected Seance:', this.selectedSeance);
    // You can perform further actions here based on the selected value
  }

}
