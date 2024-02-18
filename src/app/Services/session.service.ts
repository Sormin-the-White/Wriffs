// session.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionData: any = {};

  constructor() { }

  setSessionData(key: string, value: any) {
    this.sessionData[key] = value;
  }

  getSessionData(key: string): any {
    return this.sessionData[key];
  }

  clearSessionData() {
    this.sessionData = {};
  }
}
