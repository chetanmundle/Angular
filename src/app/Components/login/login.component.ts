import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: any = {
    userName: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLoginButtonClick() {
    this.http
      .post('https://localhost:7253/api/UserAccount/Login', this.user)
      .subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('access_token', res.accessToken);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
