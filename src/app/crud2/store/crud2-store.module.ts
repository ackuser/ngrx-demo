import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Crud2Effects } from './crud2.effects';
import { crud2Reducer } from './crud2.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('crud2', crud2Reducer),
    EffectsModule.forFeature([Crud2Effects]),
  ]
})
export class Crud2StoreModule { }
