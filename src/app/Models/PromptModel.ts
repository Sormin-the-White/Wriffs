import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PromptModel {
  prompt: string | undefined;
  genre: string | undefined;
  constructor() {

  }
}
