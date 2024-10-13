import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp > currentTime) {
          return true; // Token is valid
        } else {
          // Token is expired
          localStorage.removeItem('access_token');
          this.router.navigate(['/Login']);
          return false;
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('access_token');
        this.router.navigate(['/Login']);
        return false;
      }
    } else {
      // No token found, redirect to login
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
