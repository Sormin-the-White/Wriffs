import { Injectable, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { DataService } from './data.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiEndpoints } from '../Models/ApiEndpoints';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private sessionService: SessionService,
    private dataService: DataService,
    private cookieService: SsrCookieService,
    private apiEndpoints: ApiEndpoints
    ) { }

  updateLoggedInStatus(status: boolean){
    this.loggedIn.next(status)
  }

  isLoggedIn(): boolean {
    let jwt = this.cookieService.get("jwt");

    const isLoggedInObservable: Observable<any> = this.dataService.postDataAsync(this.apiEndpoints.authentication.validateJwtAuth, { token: jwt });
    isLoggedInObservable.subscribe({
        next: (data) => { this.updateLoggedInStatus(data.valid) },
        error: (error) => { console.error(error); },
        complete: () => { console.log("Request completed."); }
    });

    return false;
  }

  getLoggedInStatus(): Observable<any> {
    this.isLoggedIn();
    return this.loggedIn.asObservable();
  }

  logIn(usernameOrEmail: string, password: string): Observable<any> {
    return this.dataService.postDataAsync(this.apiEndpoints.authentication.loginUser, { usernameOrEmail, password });
  }
}

