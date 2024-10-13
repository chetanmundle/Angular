import { Component } from '@angular/core';
import { ChildOnDestroyComponent } from '../child-on-destroy/child-on-destroy.component';

@Component({
  selector: 'app-parent-on-destroy',
  standalone: true,
  imports: [ChildOnDestroyComponent],
  templateUrl: './parent-on-destroy.component.html',
  styleUrl: './parent-on-destroy.component.css',
})
export class ParentOnDestroyComponent {
  isVisible: boolean = true;

  ShowHide() {
    this.isVisible = !this.isVisible;
  }
}
