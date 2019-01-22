import { NgModule } from '@angular/core';
import { Search2RoutingModule } from '@app/search2/search2-routing.module';
import { Search2Effects, search2Reducer } from '@app/search2/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('search2', search2Reducer),
    EffectsModule.forFeature(
      [ Search2Effects ]
    ),
    Search2RoutingModule
  ],
  declarations: [ Search2RoutingModule.components ]
})
export class Search2Module { }
