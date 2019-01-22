import { NgModule } from '@angular/core';
import { CrudRoutingModule } from '@app/crud/crud-routing.module';
import { CrudEffects, crudReducer } from '@app/crud/store';
import { InMemoryApiModule } from '@app/in-memory-api/in-memory-api.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

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
