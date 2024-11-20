import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css',
})
export class BucketComponent {
  myBucket$?: Observable<Bucket[]>;
  groceries$?: Observable<Grocery[]>;

  constructor(
    private store: Store<{ myBucket: Bucket[]; groceries: Grocery[] }>
  ) {
    this.myBucket$ = this.store.select('myBucket');
    this.groceries$ = this.store.select('groceries'); // If have more than one data
  }
}
