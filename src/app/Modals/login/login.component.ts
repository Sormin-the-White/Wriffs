import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../Services/data.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { finalize } from 'rxjs';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  usernameOrEmail: string = '';
  password: string = '';

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private authService: AuthService, private cookieService: SsrCookieService) { }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    console.log(this.usernameOrEmail, this.password);
    try {
        this.authService.logIn(this.usernameOrEmail, this.password)
            .pipe(
                finalize(() => {
                    // Close the dialog after the login process is complete or an error occurs
                    this.dialogRef.close();
                })
            )
            .subscribe({
                next: (loginResponse) => {
                    console.log(loginResponse);
                    this.authService.updateLoggedInStatus(true);
                    this.cookieService.set("jwt", loginResponse.token);
                },
                error: (error) => {
                    console.log('Error logging in:', error.error.detail);
                }
            });
    } catch (error: any) {
        console.log('Error logging in:', error.error.detail);
        this.dialogRef.close();
    }
}

  cancel(): void {
    // If user cancels the login process, close the dialog
    this.dialogRef.close();
  }

  keyDown(): void {
    console.log('enter');
  }
}
