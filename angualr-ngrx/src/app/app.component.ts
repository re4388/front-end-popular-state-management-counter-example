import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './reducers/index';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
  }
}
