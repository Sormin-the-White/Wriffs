import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { IconLinkComponent } from '../icon-link/icon-link.component';
import { AuthService } from '../../Services/auth.service';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [NavbarComponent, RouterOutlet, IconLinkComponent]
})
export class LayoutComponent implements OnInit {
  linkName: string = '';
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.getLoggedInStatus().subscribe((status) => {
      this.isLoggedIn = status;
    })
  }

  ngOnInit(): void {
    // this.testShare.data$.subscribe(data => {
    //   this.linkName = data;
    // })
  }
}
