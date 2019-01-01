import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromRoot from './../root-store';
import { BasicStoreSelectors, MessageStoreActions, SwitchStoreActions } from './store';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  message$: Observable<String>;
  status$: Observable<boolean>;

  constructor(private store$: Store<fromRoot.State>) {}

  ngOnInit() {
    this.message$ = this.store$.pipe(
      select('basic'),
      map((response) => {
        return response.message.message;
      })
    );

    this.status$ = this.store$.pipe(
      select(BasicStoreSelectors.selectSwitchStatus)
    );

  }

  translateInEnglish() {
    this.store$.dispatch(new MessageStoreActions.EnglishTranslator());
  }

  translateInSpanish() {
    this.store$.dispatch(new MessageStoreActions.SpanishTranslator());
  }

  resetMessage() {
    this.store$.dispatch(new MessageStoreActions.ResetTranslator());
  }

  on() {
    this.store$.dispatch(new SwitchStoreActions.SwitchON(true));
  }

  off() {
    this.store$.dispatch(new SwitchStoreActions.SwitchOFF(false));
  }

  resetSwitch() {
    this.store$.dispatch(new SwitchStoreActions.ResetSwitch());
  }

  logOut() {
    this.store$.dispatch(new fromRoot.RootStoreActions.LogoutToHome());
  }

}

