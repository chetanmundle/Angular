import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  addToBucket,
  removeFromBucket,
} from '../../store/actions/bucket.action';
import { Bucket } from '../../../models/bucket.model';
import {
  selectGroceries,
  selectGroceriesByType,
} from '../../store/selector/grocery.selector';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css',
})
export class GroceryComponent {
  groceries$?: Observable<Grocery[]>;

  constructor(private store: Store<{ groceries: Grocery[] }>) {
    //? this.groceries$ = this.store.select('groceries');
    // if we defined the selector then insted of above we can directly select by bellow code
    //? this.groceries$ = this.store.select(selectGroceries);
    this.groceries$ = this.store.select(selectGroceriesByType('all'));
  }

  onTypeChange(event: Event) {
    const type = (event.target as HTMLSelectElement).value;

    this.groceries$ = this.store.select(selectGroceriesByType(type));
  }

  increment(item: Grocery) {
    const payload: Bucket = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };

    // this.store.dispatch({ type: 'Update', payload: payload });
    this.store.dispatch(addToBucket({ payload }));
  }
  decrement(item: Grocery) {
    const payload: Bucket = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };

    this.store.dispatch(removeFromBucket({ payload }));
  }
}
