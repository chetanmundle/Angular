import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
];
