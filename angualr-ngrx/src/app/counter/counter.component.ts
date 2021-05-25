import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  CounterDecrement,
  CounterIncrement,
  CounterReset,
} from '../actions/counter.actions';
import * as fromStore from '../reducers/index';

@Component({
  selector: 'app-counter',
  template: ` <div class="counter">
    <div class="total">{{ total | async }}</div>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="reset()">reset</button>
  </div>`,
  styles: [
    `
      .counter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: 1px solid #9999;
        border-radius: 10px;
        padding: 10px;
      }
      .counter button {
        width: 40px;
        margin: 10px;
      }
      .total {
        margin: 10px;
        font-size: 80px;
      }
    `,
  ],
})
export class CounterComponent implements OnInit {
  total: Observable<number>;
  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    // use select to get the state
    this.total = this.store.select('counter');
  }

  increment() {
    // use dispatch to dispatch action class
    this.store.dispatch(new CounterIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterDecrement());
  }

  reset() {
    this.store.dispatch(new CounterReset());
  }
}
