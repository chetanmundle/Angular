import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-on-destroy',
  standalone: true,
  imports: [],
  templateUrl: './child-on-destroy.component.html',
  styleUrl: './child-on-destroy.component.css',
})
export class ChildOnDestroyComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy Call');
  }
}
