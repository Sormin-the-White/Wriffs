import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  private promptData: any;

  constructor(private dataService: DataService) { }

  getPromptData(): Observable<any> {
    if (this.promptData) {
      return of(this.promptData);
    } else {
      return this.dataService.getData("Prompt", {});
    }
  }

  setPromptData(data: any): void {
    this.promptData = data;
  }
}
