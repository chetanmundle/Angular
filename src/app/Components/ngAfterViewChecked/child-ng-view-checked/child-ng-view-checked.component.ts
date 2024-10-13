import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-child-ng-view-checked',
  standalone: true,
  imports: [],
  templateUrl: './child-ng-view-checked.component.html',
  styleUrl: './child-ng-view-checked.component.css'
})
export class ChildNgViewCheckedComponent implements AfterViewChecked {
 ngAfterViewChecked(): void {
   console.log("ngAfterViewChecked Call");
   
 }
 Test(){
  console.log('Test');
 }
}
