import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';


// Select the counter slice
export const selectCounterState = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectCounterState,
  counter => counter.count
);

export const selectTodo = createSelector(
  selectCounterState,
  counter => counter.todo
);