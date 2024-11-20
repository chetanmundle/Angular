import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';
import { addToBucket, removeFromBucket } from '../actions/bucket.action';
import { act } from '@ngrx/effects';

const initialState: Bucket[] = [];

export const buacketReducer = createReducer(
  initialState,
  on(addToBucket, (state, action) => {
    const bucketItem = state.find((item) => item.id === action.payload.id);

    if (bucketItem) {
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item;
      });
    }

    return [...state, action.payload];
  }),
  on(removeFromBucket, (state, action) => {
    const bucketItem = state.find((item) => item.id === action.payload.id);

    if (bucketItem) {
      if (bucketItem.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity - action.payload.quantity }
          : item;
      });
    }

    return state;
  })
);
