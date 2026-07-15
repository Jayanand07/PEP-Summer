import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService);
  const router = inject(Router);

  // Check signal first
  if (Auth.currLoggedInUser()?.currLoggedInUserStatus === true) {
    return true;
  }

  // Fallback: check localStorage (handles page refresh)
  const saved = localStorage.getItem('userDetails');
  if (saved) {
    const user = JSON.parse(saved);
    if (user?.currLoggedInUserStatus === true) {
      Auth.currLoggedInUser.set(user);
      return true;
    }
  }

  // Not logged in — redirect to login
  router.navigate(['']);
  return false;
};
