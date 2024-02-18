import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PromptService } from '../../Services/prompt.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit{
  strList: string[] = ['good job'];
  prompt: string = '';
  genre: string = '';
  constructor(private promptService: PromptService, private cookieService: SsrCookieService) {
    for (let i=0; i < 10; i++){
      this.strList.push(i.toString());
    }
  }
  // ngOnInit(): void {
  //   const result = this.dataService.getData("Prompt", {});
  //   of(result).subscribe({
  //     next: (d: any) => console.log(d.prompt, d.genre),
  //     error: (e) => console.log(`error: ${e}`),
  //     complete: () => console.log('prompt retrieval complete')
  //   });
  // }

  ngOnInit(): void {
    this.promptService.getPromptData().subscribe(
      (data: any) => {
        this.genre = data.genre;
        this.prompt = data.prompt;
        this.promptService.setPromptData(data); // Cache the data
      },
      () => console.log(`Error retrieving prompt`),
      () => console.log("Prompt retrieval completed")
    );
  }
}
