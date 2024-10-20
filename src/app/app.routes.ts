import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ParentComponent } from './Components/parent/parent.component';
import { Child1Component } from './Components/parent/Children/child1/child1.component';
import { Child2Component } from './Components/parent/Children/child2/child2.component';
import { Child3Component } from './Components/parent/Children/child3/child3.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: '',
        redirectTo: 'child1',
        pathMatch: 'full',
      },
      {
        path: 'child1',
        component: Child1Component,
      },
      {
        path: 'child2',
        component: Child2Component,
      },
      {
        path: 'child3',
        component: Child3Component,
      },
    ],
  },
];
