import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-after-content-init.component.html',
  styleUrl: './ng-after-content-init.component.css',
})
export class NgAfterContentInitComponent implements AfterContentInit, OnInit {
  ngAfterContentInit(): void {
    console.log('AfterContentInit Call');
  }

  ngOnInit(): void {
    console.log('OnInit Call');
  }
}
