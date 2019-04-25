import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  password: string;
  username: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user: string, password: string): Observable<boolean> {
    const check = this.checkPassword(user, password);
    return of(check).pipe(
      tap(val => this.isLoggedIn = check)
    );
  }
  checkPassword(user: string, password: string) {
    return user === 'admin' && password === 'password' ? true : false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.password = null;
    this.username = null;
  }
}
