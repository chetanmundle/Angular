import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChildAfterViewInitComponent } from '../child-after-view-init/child-after-view-init.component';

@Component({
  selector: 'app-parent-after-view-init',
  standalone: true,
  imports: [ChildAfterViewInitComponent],
  templateUrl: './parent-after-view-init.component.html',
  styleUrl: './parent-after-view-init.component.css',
})
export class ParentAfterViewInitComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log('OnInit Parent');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Parent');
  }
}
