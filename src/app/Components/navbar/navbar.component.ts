import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../../Modals/login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = "";
  constructor(private authService: AuthService, private dialog: MatDialog) { }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = 'auto';
    dialogConfig.height = '600px';
    //dialogConfig.panelClass = 'custom-modal-container'; // Set width to 75% of the screen
    dialogConfig.disableClose = false;
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // handle the result if needed
    });
  }

  ngOnInit(): void {
    // Check if user is logged in
    this.isLoggedIn = this.authService.isLoggedIn();
    if (!this.isLoggedIn){
      // this.authService.logIn();
    }
  }
}
