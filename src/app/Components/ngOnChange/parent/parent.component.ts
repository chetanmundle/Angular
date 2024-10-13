import { Component } from '@angular/core';
import { ChaildComponent } from '../chaild/chaild.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChaildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  name: any = 'Chetan';

  fun() {
    this.name = 'Value is chagned';
  }
}
