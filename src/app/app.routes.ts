import { Routes } from '@angular/router';
import { SignalsComponent } from './Components/signals/signals.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signals',
    pathMatch: 'full',
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
];
