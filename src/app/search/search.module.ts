import { NgModule } from '@angular/core';
import { SearchRoutingModule } from '@app/search/search-routing.module';
import { SearchEffects, searchReducer } from '@app/search/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('search', searchReducer),
    EffectsModule.forFeature(
      [ SearchEffects ]
    ),
    SearchRoutingModule
  ],
  declarations: [ SearchRoutingModule.components ]
})
export class SearchModule { }
