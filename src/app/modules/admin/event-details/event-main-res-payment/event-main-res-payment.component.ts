import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { PmsProductSessionsByIdDto } from 'src/app/common/models/PmsProductSessionsByIdDto';
import { EventDetailsBasketComponent } from '../dialogs/event-details-basket/event-details-basket.component';
import { PmsSalesForecastReportDto, TimeOnly } from 'src/app/common/models/PmsSalesForecastReportDto';

@Component({
  selector: 'app-event-main-res-payment',
  templateUrl: './event-main-res-payment.component.html',
  styleUrls: ['./event-main-res-payment.component.scss']
})
export class EventMainResPaymentComponent implements OnInit, AfterViewChecked {
  @Input() selectedEventId: string | null = null;
  @Input() html: string | null = null;
  @Input() image: string | null = null;
  @Input() selectedProductData: PmsProductSessionsByIdDto | null = new PmsProductSessionsByIdDto();
  selectedSeance: any;
  selectedCategory: any;

  basketItemDetails = [{
    'eventid': "23423423423fgd",
  }]
  adultCount: number = 1;
  childCount: number = 0;
  slideIndex = 1;


  categoriesFiltered: PmsSalesForecastReportDto[] = [];
  seancesFiltered: PmsSalesForecastReportDto[] = [];
  viewChecked = false;
  currPrice?: number;
  currSymbol?: string;
  constructor(
    private _cookieService: CookieService,
    private _dialog: MatDialog
  ) {

  }

  ngAfterViewChecked(): void {
    this.selectedProductData;
    if (this.selectedProductData?.sessions && this.selectedProductData.sessions.length > 0 && !this.viewChecked) {

      const uniqueAreas = new Set<TimeOnly>();

      this.seancesFiltered = this.selectedProductData.sessions.filter(session => {
        if (session?.seanceBegin && uniqueAreas.has(session?.seanceBegin)) {
          return false; // If area is already in the set, filter it out
        } else if (session.seanceBegin) {
          uniqueAreas.add(session.seanceBegin); // Otherwise, add it to the set and keep it
          return true;
        } else {
          return false;
        }
      });
      debugger
      this.viewChecked = true;
    }

  }
  ngOnInit() {
    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component
      this.updateHeader(newCookieValue);
    });
    //this.showSlides(this.slideIndex);



  }


  continue(): void {
    const data = this.selectedProductData;
    // const selectedSession = data?.sessions.find(x => x.programDetailId === selectedSession);
    data?.sessions.filter(x => x.programDetailId === this.selectedSeance)
    const dialog = this._dialog.open(EventDetailsBasketComponent, {
      disableClose: false,
      data: data
    }).afterClosed().subscribe((err) => {
      if (err.status) {
        const sweetAlertDto = new SweetAlertDto(
          'Sepete Eklendi!',
          '',
          SweetalertType.success
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    });
  }
  addBasket(): void {

    //const data = this.selectedProductData;
    //data?.sessions.filter(x => x.programDetailId === this.selectedSeance)


    const filterArea: string = this.selectedCategory?.toString() ?? '';
    const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === filterArea) ?? null;
    if (!selectedEvent) {
      return;
    }

    const cookie = this._cookieService.getCookie('basketEvents');

    const model = [{
      category: selectedEvent.detailRemark,
      sessionId: selectedEvent.programDetailId,
      image: this.image,
      date: this.selectedProductData?.programEndDate,
      sessionTime: this.selectedSeance,
      childPrice: selectedEvent.childTicketPrice,
      adultPrice: selectedEvent.ticketPrice,
      adultCount: this.adultCount,
      childCount: this.childCount,
      title: selectedEvent.remark,
      totalPrice: this.getTotalPrice(),
      extraServices: []
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


  }

  updateHeader(newCookieValue: string): void {
    // Your logic to update the header

    console.log('Header updated with new cookie value:', JSON.stringify(newCookieValue));
  }

  selectSeance(): void {

    //console.log('Selected Seance:', this.selectedSeance);
    if (this.selectedSeance && this.selectedProductData) {
      this.categoriesFiltered = this.selectedProductData.sessions.filter(session => session.seanceBegin === this.selectedSeance);
    }
  }
  selectCategory(): void {

    console.log('Selected Seance:', this.selectCategory);
    // You can perform further actions here based on the selected value
  }


  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    debugger
    let i: number;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }








  decrementValue(item: string): void {
    if (item === 'adult' && this.adultCount > 1) {
      this.adultCount -= 1;
    } else if (item === 'child' && this.childCount > 0) {
      this.childCount -= 1;
    }
  }
  incrementValue(item: string): void {
    if (item === 'adult') {
      this.adultCount += 1;
    } else if (item === 'child') {
      this.childCount += 1;
    }
  }

  getTotalPrice(): number {
    if (this.selectedSeance && this.selectedCategory) {
      debugger
      const filterArea: string = this.selectedCategory?.toString() ?? '';
      const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === filterArea) ?? null;

      if (selectedEvent !== null) {
        if (selectedEvent.currAdultPrice !== selectedEvent.ticketPrice) {
          this.currPrice = ((selectedEvent.ticketPrice ?? 0) * this.adultCount) + ((selectedEvent?.childTicketPrice ?? 0) * this.childCount);
          this.currSymbol = selectedEvent.curr;
        } else {
          this.currPrice = undefined;
        }
        const adult = selectedEvent?.currAdultPrice ?? 0;
        const child = selectedEvent?.currChildPrice ?? 0;

        return (adult * this.adultCount) + (child * this.childCount);
      }
    }
    return 0;
  }
}
