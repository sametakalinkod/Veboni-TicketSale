import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/core/services/global/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  videoMuted: boolean = true;
  basketItems: any[] = [];
  constructor(
    private _router: Router,
    private _cookieService: CookieService
  ) { }


  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.updateHeader();

    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component
      this.updateHeader(newCookieValue);
    });
  }


  handleClick(): void {
    this.videoMuted = !this.videoMuted;
  }


  navigateToBasket(): void {
    this._router.navigate(['/basket']);
  }

  updateHeader(newCookieValue?: string): void {
    // Your logic to update the header
    const basketValue = this._cookieService.getCookie('basketEvents')
    if (basketValue && JSON.parse(basketValue)) {
      this.basketItems = JSON.parse(basketValue);
    } else {
      this.basketItems = [];
    }
    console.log('This is header updated with new cookie value:', newCookieValue);
  }


}
