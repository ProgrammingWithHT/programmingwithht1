import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '../../store/selectors/counter.selectors';

@Component({
  selector: 'app-reused-counter',
  imports: [AsyncPipe],
  templateUrl: './reused-counter.html',
  styleUrl: './reused-counter.css',
})
export class ReusedCounter {
  count$: Observable<number>

  //below ngRx 16 old way
  // constructor(private store: Store<{count: number}>){
  //   this.count$ = this.store.select('count')
  // }

  //after ngRx 16+ new way
  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }
}
