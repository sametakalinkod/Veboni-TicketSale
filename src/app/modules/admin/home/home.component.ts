import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionResponse } from 'src/app/core/models/ActionResponse';
import { PmsSalesForecastReportDto } from 'src/app/core/models/products/PmsSalesForecastReportDto';
import { GroupProductsListBySession } from 'src/app/core/services/products/GroupProductsListBySession';
import { ProductsService } from 'src/app/core/services/products/Products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('cosmosDance_video_player') videoPlayer: ElementRef | undefined;
  pauseMainPageVid: boolean = true;
  videoMuted: boolean = true;


  //loop static
  staticCount = 20;
  slidesEx: any;

  salesforecastreport: PmsSalesForecastReportDto[] = [];
  productsListByDate: GroupProductsListBySession[] = [];


  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  constructor(
    private _router: Router,
    private _productService: ProductsService
  ) { }

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  ngOnInit() {
    // $(document).ready(() => {
    //   $('.js-slick01').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   });
    // });


    this.getProductsAndSessions();
  }



  getProductsAndSessions(): void {
    const model = {
      //produceId: item.recId,
      beginDate: new Date(),
      produceType: 3
      //endDate: this.reservationInfo.checkoutdate
    }
    this._productService.getPmsSalesForecastReport(model).subscribe({
      next: (response: ActionResponse<any>) => {
        this.salesforecastreport = response.data;
         
        this.productsListByDate = this.salesforecastreport.map((item) => {
          const { date, productId, ...rest } = item;
          const dateString = date?.toString().split('T')[0]; // Convert Date to string
          return {
            date,
            productId,
            child: [rest] // Push the current item to the child array
          };
        }).reduce((accumulator: GroupProductsListBySession[], currentValue) => {
          const key = `${currentValue.date}-${currentValue.productId}`;
          const existingItem = accumulator.find(item => `${item.date}-${item.productId}` === key);
          if (existingItem) {
            existingItem.child.push(...currentValue.child);
          } else {
            accumulator.push(currentValue);
          }
          return accumulator;
        }, []);
      },
      error: (error) => {
        console.error("Error:", error);
      },
      complete: () => {
      }
    });
  }



  handleClick(): void {
    this.videoMuted = !this.videoMuted;
  }

  onHoverMethod(value: boolean): void {
    this.pauseMainPageVid = value;
    console.log('Hovered!');
    var dance_video = document.getElementById("cosmosDance_video_player") as HTMLVideoElement;

    if (dance_video && value) {
      dance_video.play();
    } else if (dance_video) {
      dance_video.pause();
    }
  }


  openSelectedEventDetails(selectedEvent?: string): void {
     
    if (selectedEvent) {
      const encodedGuid = btoa(selectedEvent);
      const url = this._router.serializeUrl(
        this._router.createUrlTree([`/eventdetails/${encodedGuid}`])
      );
      //open different page
      // window.open(url, '_blank');
      window.location.href = url;
    }
  }

  onClickLeft() {

  }

  onClickRight() {

  }

}
