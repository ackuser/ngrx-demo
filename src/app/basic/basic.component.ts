import { Component, OnInit } from '@angular/core';
import {
  BasicStoreSelectors,
  MessageStoreActions,
  SwitchStoreActions,
} from '@app/basic/store';
import * as fromRoot from '@app/root-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  message$: Observable<String>;
  status$: Observable<boolean>;
  appEnvConfig$: Observable<any>;

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

    this.appEnvConfig$ = this.store$.pipe(
      select(fromRoot.AppInitSelectors.selectConfig)
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

  loadAppConfig() {
    this.store$.dispatch(new fromRoot.AppConfigActions.AppConfigLoadRequest());
  }
}
