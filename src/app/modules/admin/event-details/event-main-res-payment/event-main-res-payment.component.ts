import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { EventDetailsBasketComponent } from '../dialogs/event-details-basket/event-details-basket.component';

@Component({
  selector: 'app-event-main-res-payment',
  templateUrl: './event-main-res-payment.component.html',
  styleUrls: ['./event-main-res-payment.component.scss']
})
export class EventMainResPaymentComponent implements OnInit {
  @Input() selectedEventId: string | null = null;

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
    this._cookieService.setCookie("basketEvents", JSON.stringify(this.basketItemDetails), 7);
    const dialog = this._dialog.open(EventDetailsBasketComponent, {
      disableClose: false,
      data: null
    }).afterClosed().subscribe((err) => {
      if (err.status) {
        //this.filtersClick();
      }
    });

  }

  updateHeader(newCookieValue: string): void {
    // Your logic to update the header
    console.log('Header updated with new cookie value:', newCookieValue);
  }

}
