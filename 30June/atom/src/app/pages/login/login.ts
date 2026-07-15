import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/utils';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public router = inject(Router);
  public AuthService = inject(AuthService);
  buttonConfig = buttonConfig;
  username = '';
  userpass = '';
  passToggle = false;
  errorMsg = '';

  login() {
    this.AuthService.userName = this.username;
    this.AuthService.password = this.userpass;

    const isLoggedIn = this.AuthService.userLogIn(this.username, this.userpass);

    if (isLoggedIn) {
      const loggedInUser = {
        name: this.username,
        pass: this.userpass,
        currLoggedInUserStatus: true,
      };

      this.AuthService.currLoggedInUser.set(loggedInUser);
      localStorage.setItem('userDetails', JSON.stringify(loggedInUser));

      this.router.navigate(['/home']);
    } else {
      this.errorMsg = 'Invalid username or password. Please sign up first.';
    }
  }
}
