import { Component } from '@angular/core';
import { LayoutComponent } from './Components/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wriffs';
}

