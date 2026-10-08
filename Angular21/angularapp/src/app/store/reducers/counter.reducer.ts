import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, loadTodoSuccess, loadTodoFailure } from '../actions/counter.action';

export interface CounterState {
  count: number;
  todo?: any;
  error?: any;
}

export const initialState: CounterState = {
  count: 0,
  todo: null,
  error: null,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state => ({ ...state, count: state.count - 1 })),
  on(reset, state => ({ ...state, count: 0 })),
  on(loadTodoSuccess, (state, { todo }) => ({ ...state, todo, error: null })),
  on(loadTodoFailure, (state, { error }) => ({ ...state, error }))
);