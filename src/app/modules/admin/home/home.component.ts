import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionResponse } from 'src/app/core/models/ActionResponse';
import { PmsSalesForecastReportDto } from 'src/app/core/models/products/PmsSalesForecastReportDto';
import { GroupProductsListBySession } from 'src/app/core/services/products/GroupProductsListBySession';
import { ProductsService } from 'src/app/core/services/products/Products.service';
import { SwiperContainer } from 'swiper/element';
import SwiperCore from 'swiper';
import { Subject, interval, takeUntil } from 'rxjs';
import { SliderAnimatedDirective } from '../common/directives/slider-animated.directive';
import { ProgramBaseDto } from 'src/app/common/models/ProgramBaseDto';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(SliderAnimatedDirective) sliderDirective!: SliderAnimatedDirective;
  @ViewChildren(SliderAnimatedDirective) sliderDirectives!: QueryList<SliderAnimatedDirective>;

  private destroy$: Subject<void> = new Subject<void>();

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

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
  index = 0;
  activeProducts: ProgramBaseDto[] = [];
  activeProductsSlider: ProgramBaseDto[] = [];

  productSearchForm!: FormGroup;
  minDate: Date = new Date();
  checkOutDate!: Date;

  constructor(
    private _router: Router,
    private _productService: ProductsService,
    private _formBuilder: FormBuilder

  ) {
    this.checkOutDate = new Date(this.minDate.getTime() + 86400000);

  }


  slideChange(swiperRef: any) {
    this.index = swiperRef.detail[0].activeIndex;
  }
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
    this.productSearchForm = this._formBuilder.group({
      start: [this.minDate],
      end: [this.checkOutDate],
      product: [],
    });
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

    interval(7000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.triggerAnimation();
      });

    this.getActiveEvents();
    this.searchEvents();
    //this.getProductsAndSessions();
  }


  triggerAnimation() {
    const activeDirective = this.sliderDirectives.find(directive => directive.hasActiveClass());
    if (activeDirective) {
      const nextIndex = activeDirective.getNextIndex();
      if (nextIndex !== null) {
        const nextDirective = this.sliderDirectives.toArray()[nextIndex];
        if (nextDirective) {
          nextDirective.onClick();
        }
      }
    }
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


  getActiveEvents(): void {
    const model = {
      beginDate: new Date(),
      produceType: 3
    }
    this._productService.getActiveEvents(model).subscribe({
      next: (response: ActionResponse<any>) => {
        this.activeProducts = response.data;
        //   if (this.activeProducts[0] !== undefined && this.activeProducts[0].imageList !== undefined) {
        //     this.activeProducts[0].imageList = [];
        // }
        this.activeProductsSlider = this.activeProducts.slice(0, 5);

        // If the number of items is less than 5, repeat the items until you have 5 items
        while (this.activeProductsSlider.length < 5) {
          const remainingItems = 5 - this.activeProductsSlider.length;
          const itemsToAdd = this.activeProducts.slice(0, remainingItems);
          this.activeProductsSlider = this.activeProductsSlider.concat(itemsToAdd);
        }        //this.salesforecastreport = response.data;

        // this.productsListByDate = this.salesforecastreport.map((item) => {
        //   const { date, productId, ...rest } = item;
        //   const dateString = date?.toString().split('T')[0]; // Convert Date to string
        //   return {
        //     date,
        //     productId,
        //     child: [rest] // Push the current item to the child array
        //   };
        // }).reduce((accumulator: GroupProductsListBySession[], currentValue) => {
        //   const key = `${currentValue.date}-${currentValue.productId}`;
        //   const existingItem = accumulator.find(item => `${item.date}-${item.productId}` === key);
        //   if (existingItem) {
        //     existingItem.child.push(...currentValue.child);
        //   } else {
        //     accumulator.push(currentValue);
        //   }
        //   return accumulator;
        // }, []);
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

  dateRangeChange() {
    let startDate = new Date(this.productSearchForm.controls["start"]?.value);
    let endDate = new Date(this.productSearchForm.controls["end"]?.value);
    if (!(endDate <= startDate)) {
      // var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      // var numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      // this.productSearchForm.controls["stayDate"]?.setValue(numberOfNights);
    }
  }

  searchEvents(): void {
    const model = {
      produceId: (this.productSearchForm.controls["product"]?.value && this.productSearchForm.controls["product"]?.value != '') ? this.productSearchForm.controls["product"]?.value.programId : null,
      beginDate: new Date(this.productSearchForm.controls["start"]?.value),
      produceType: 3,
      endDate: new Date(this.productSearchForm.controls["end"]?.value)
    }
    debugger
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


  displayFn(program: ProgramBaseDto): string {
    return program && program.remark ? program.remark : '';
  }

  onProductChange(event: any): void {
    if (event?.option?.value) {
      this.productSearchForm.get('product')?.setValue(event.option.value);
    }
  }
}
