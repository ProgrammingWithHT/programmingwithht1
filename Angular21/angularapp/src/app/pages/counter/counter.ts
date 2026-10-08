import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { increment, decrement, reset, loadTodo } from '../../store/actions/counter.action';
import { Store } from '@ngrx/store';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { selectCount, selectTodo } from '../../store/selectors/counter.selectors';
import { AppState } from '../../store/state/app.state';

//Instead of importing only AsyncPipe, many developers import CommonModule.
//This gives access to:
// async pipe
// ngIf
// ngFor

// In Angular, the async pipe automatically subscribes to an Observable and shows its value in the UI.

// Example:

// <h2>{{ count$ | async }}</h2>

// What happens internally:

// Angular subscribes to the Observable

// Gets the latest value

// Shows it in the UI

// Automatically unsubscribes when component is destroyed

// Without async pipe you would need manual subscription.

// Example without async pipe:

// count: number = 0;

// ngOnInit(){
//  this.store.select('count').subscribe(value => {
//    this.count = value;
//  });
// }

// Problem:

// You must unsubscribe manually

// Memory leak risk

// Async pipe solves this automatically.

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, NgIf, JsonPipe],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  //   Observable comes from RxJS.

  // Observable = a stream of data that changes over time.
  count$: Observable<number>  //without dolloar also work dollar sign just show that the variable is Observable
  todo$: Observable<any>
  // constructor(private store: Store<{count: number}>){
  //   // this.count$ = this.store.select('count');  //select return observable so used select instad of below line code
  //   // this.store.subscribe(state => console.log(state));

  //   this.count$ = this.store.select(selectCount)   //this is modern way of using selector above slect('count') is depracted now above ngRx 16+ used this method selector
  //   this.todo$ = this.store.select(selectTodo);
  // }

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.todo$ = this.store.select(selectTodo);
  }

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
  reset() { this.store.dispatch(reset()); }
  fetchTodo() { this.store.dispatch(loadTodo()); }

  // increment(){
  //   this.store.dispatch(increment());
  // }
  // decrement(){
  //   this.store.dispatch(decrement());
  // }
  // reset(){
  //   this.store.dispatch(reset());
  // }

  // fetchTodo() {
  //   this.store.dispatch(loadTodo());
  // }
}
