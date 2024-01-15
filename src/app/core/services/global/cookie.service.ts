import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private cookieChangeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }



  getCookie(name: string): string | null {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');



    for (const cookie of cookies) {
      let trimmedCookie = cookie.trim();

      if (trimmedCookie.indexOf(cookieName) == 0) {
        console.log(trimmedCookie.substring(cookieName.length, trimmedCookie.length));

        return trimmedCookie.substring(cookieName.length, trimmedCookie.length);
      }
    }

    return null;
  }

  setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';

    // Notify subscribers about the cookie change
    this.cookieChangeEmitter.emit(value);
  }

  subscribeToCookieChanges(): EventEmitter<string> {
    return this.cookieChangeEmitter;
  }
}
