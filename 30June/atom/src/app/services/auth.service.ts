import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public router = inject(Router);
  public currLoggedInUser = signal({} as any);
  userName = '' as any;
  password = '' as any;

  constructor() {
    // On app load, restore user from localStorage if exists
    const saved = localStorage.getItem('userDetails');
    if (saved) {
      this.currLoggedInUser.set(JSON.parse(saved));
    }
  }

  userLogIn(name?: string, password?: string) {
    const saved = localStorage.getItem('userDetails');
    if (!saved) return false;

    const savedUser = JSON.parse(saved);

    // Compare entered credentials with saved signup credentials
    if (
      this.userName === savedUser.name &&
      this.password === savedUser.pass
    ) {
      console.log('Login successful');
      return true;
    } else {
      console.log('Login failed — wrong credentials');
      return false;
    }
  }

  logOut() {
    this.currLoggedInUser.set({});
    localStorage.removeItem('userDetails');
    this.router.navigate(['']);
  }
}
