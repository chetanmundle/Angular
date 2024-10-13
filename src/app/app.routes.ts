import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NgOnInitHookComponent } from './Components/ng-on-init-hook/ng-on-init-hook.component';
import { ParentComponent } from './Components/ngOnChange/parent/parent.component';
import { NgDoCheckComponent } from './Components/ngDoCheck/ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './Components/NgAfterContentInit/ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentCheckComponent } from './Components/ng-after-content-check/ng-after-content-check.component';
import { ParentAfterViewInitComponent } from './Components/NgAfterViewInit/parent-after-view-init/parent-after-view-init.component';
import { ParentNgViewCheckedComponent } from './Components/ngAfterViewChecked/parent-ng-view-checked/parent-ng-view-checked.component';
import { ParentOnDestroyComponent } from './Components/ngOnDestroy/parent-on-destroy/parent-on-destroy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hook/ngOnInit',
    component: NgOnInitHookComponent,
  },
  {
    path: 'hook/ngOnChange',
    component: ParentComponent,
  },
  {
    path: 'hook/ngDoCheck',
    component: NgDoCheckComponent,
  },
  {
    path: 'hook/afterContentInit',
    component: NgAfterContentInitComponent,
  },
  {
    path: 'hook/afterContentCheck',
    component: NgAfterContentCheckComponent,
  },
  {
    path: 'hook/afterViewInit',
    component: ParentAfterViewInitComponent,
  },
  {
    path: 'hook/afterViewChecked',
    component: ParentNgViewCheckedComponent,
  },
  {
    path: 'hook/onDestroy',
    component: ParentOnDestroyComponent,
  },
];
