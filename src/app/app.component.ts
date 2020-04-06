import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/root-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ngrx-demo';
  public errorMessage$: Observable<string>;
  public isLoading$: Observable<boolean>;

  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {

    this.isLoading$ = this.store$.pipe(
      select(fromRoot.AppInitSelectors.selectIsLoading)
    );

    this.errorMessage$ = this.store$.pipe(
      select(fromRoot.AppInitSelectors.selectError)
    );
  }
}
