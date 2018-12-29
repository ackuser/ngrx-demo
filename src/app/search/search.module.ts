import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchEffects, searchReducer } from './store';

@NgModule({
  imports: [
    CommonModule,
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
