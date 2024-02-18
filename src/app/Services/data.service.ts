import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:7228';

  constructor(private httpClient: HttpClient) { }

  postDataAsync(endpoint: string, body: object): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`; // Concatenate base URL with endpoint
    return this.httpClient.post<any>(url, body);
}

  getData(endpoint: string, body: object = {}): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.get<any>(url, body);
  }
}

