import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-after-view-init',
  standalone: true,
  imports: [],
  templateUrl: './child-after-view-init.component.html',
  styleUrl: './child-after-view-init.component.css',
})
export class ChildAfterViewInitComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit child');
  }
}
