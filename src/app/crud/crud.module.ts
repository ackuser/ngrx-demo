import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { InMemoryApiModule } from './../in-memory-api/in-memory-api.module';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudEffects, crudReducer } from './store';

@NgModule({
  imports: [
    SharedModule,
    InMemoryApiModule,
    StoreModule.forFeature('crud', crudReducer),
    EffectsModule.forFeature(
      [ CrudEffects ]
    ),
    CrudRoutingModule
  ],
  declarations: [ CrudRoutingModule.components ]
})
export class CrudModule { }
