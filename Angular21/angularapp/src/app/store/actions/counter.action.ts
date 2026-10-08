import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const loadTodo = createAction('[Counter] Load Todo');
export const loadTodoSuccess = createAction('[Counter] Load Todo Success', props<{ todo: any }>());
export const loadTodoFailure = createAction('[Counter] Load Todo Failure', props<{ error: any }>());