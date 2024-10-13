import { Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css',
})
export class NgDoCheckComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('DoCheck Call');
  }
  name: string = '';
}
