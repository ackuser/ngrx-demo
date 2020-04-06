import { Component, OnInit } from '@angular/core';
import { LazyLoadStoreActions, LazyLoadStoreSelectors } from '@app/lazy-load/store';
import * as fromRoot from '@app/root-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {

  message$: Observable<String>;

  constructor(private store$: Store<fromRoot.State>) {}

  ngOnInit() {
    this.message$ = this.store$.pipe(
      select(LazyLoadStoreSelectors.selectMessage)
    );
  }

  translateInEnglish() {
    this.store$.dispatch(new LazyLoadStoreActions.EnglishTranslator());
  }

  translateInSpanish() {
    this.store$.dispatch(new LazyLoadStoreActions.SpanishTranslator());
  }

  resetMessage() {
    this.store$.dispatch(new LazyLoadStoreActions.ResetTranslator());
  }

}

