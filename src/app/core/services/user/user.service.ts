import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map, tap } from 'rxjs';
import { User } from 'src/app/common/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

  constructor(private _httpClient: HttpClient) { }


  /**
       * Setter & getter for user
       *
       * @param value
       */
  set user(value: User) {
    // Store the value
    this._user.next(value);
  }

  get user$(): Observable<User> {
    return this._user.asObservable();
  }

  get(): Observable<User> {
    return this._httpClient.get<User>('api/common/user').pipe(
      tap((user) => {
        this._user.next(user);
      })
    );
  }


  /**
   * Update the user
   *
   * @param user
   */
  update(user: User): Observable<any> {
    return this._httpClient.patch<User>('api/common/user', { user }).pipe(
      map((response) => {
        this._user.next(response);
      })
    );
  }

}
