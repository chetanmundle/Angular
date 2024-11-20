import { createAction, props } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';

export const addToBucket = createAction(
  '[Bucket] Add',
  props<{ payload: Bucket }>()
  //   props<{ id: number; name: string }>()
);

export const removeFromBucket = createAction(
  '[Bucket] Remove',
  props<{ payload: Bucket }>()
);
