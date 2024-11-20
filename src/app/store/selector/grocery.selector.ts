import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

// export const selectGroceries = (state: { groceries: Grocery[] }) => state.groceries;

// we can write above line in other format like
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries'); // Prefer this

//? if we dont wnat to get any argument
// export const selectGroceriesByType = createSelector(
//   selectGroceries,
//   (state) => {
//     return state.filter((item) => item.type === 'fruit');
//   }
// );

export const selectGroceriesByType = (type: string) =>
  createSelector(selectGroceries, (state) => {
    if (type === 'all') {
      return state;
    }
    return state.filter((item) => item.type === type);
  });
