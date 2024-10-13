import { Component } from '@angular/core';
import { ChildNgViewCheckedComponent } from "../child-ng-view-checked/child-ng-view-checked.component";

@Component({
  selector: 'app-parent-ng-view-checked',
  standalone: true,
  imports: [ChildNgViewCheckedComponent],
  templateUrl: './parent-ng-view-checked.component.html',
  styleUrl: './parent-ng-view-checked.component.css'
})
export class ParentNgViewCheckedComponent {

}
