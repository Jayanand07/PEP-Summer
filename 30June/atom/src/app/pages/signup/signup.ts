import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [Button],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  route = inject(Router);
  buttonConfig = buttonConfig;
  userName = "";
  password = "";
  passToggle = false;
  errorMsg = "";
  successMsg = "";

  userLogIn() {
    if (this.userName.trim().length > 3 && this.password.trim().length > 3) {
      const userloginData = {
        name: this.userName,
        pass: this.password,
        currLoggedInUserStatus: false
      };
      localStorage.setItem("userDetails", JSON.stringify(userloginData));
      this.successMsg = "Account created! Redirecting to login...";
      setTimeout(() => this.route.navigate(['']), 1200);
    } else {
      this.errorMsg = "Username and password must be more than 3 characters.";
    }
  }
}
