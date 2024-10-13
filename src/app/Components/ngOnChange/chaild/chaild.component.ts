import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chaild',
  standalone: true,
  imports: [],
  templateUrl: './chaild.component.html',
  styleUrl: './chaild.component.css',
})
export class ChaildComponent implements OnChanges {
  @Input() item: any;

  ngOnChanges(changes: SimpleChanges): void {
    alert('Data has been change');
  }
}
