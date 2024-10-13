import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ng-after-content-check',
  standalone: true,
  imports: [],
  templateUrl: './ng-after-content-check.component.html',
  styleUrl: './ng-after-content-check.component.css',
})
export class NgAfterContentCheckComponent
  implements AfterContentChecked, OnInit, AfterContentInit
{
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call');
  }
  ngOnInit(): void {
    console.log('ngOnInit call');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call');
  }

  Test() {
    console.log('Test call');
  }
}
