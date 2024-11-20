import { createReducer } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

const initialState: Grocery[] = [
  { id: 1, name: 'Apple', type: 'fruit' },
  { id: 2, name: 'Banana', type: 'fruit' },
  { id: 3, name: 'lays chips', type: 'snacks' },
  { id: 4, name: 'doritos', type: 'snacks' },
];

export const groceryReducer = createReducer(initialState);
