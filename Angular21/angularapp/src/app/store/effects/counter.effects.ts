import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadTodo, loadTodoSuccess, loadTodoFailure } from '../actions/counter.action';

@Injectable({ providedIn: 'root' })
export class CounterEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodo),
      switchMap(() =>
        this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
          map(todo => loadTodoSuccess({ todo })),
          catchError(error => of(loadTodoFailure({ error })))
        )
      )
    )
  );
}