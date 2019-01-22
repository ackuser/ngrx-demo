import { NgModule } from '@angular/core';
import { Crud2Effects } from '@app/crud2/store/crud2.effects';
import { crud2Reducer } from '@app/crud2/store/crud2.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature('crud2', crud2Reducer),
    EffectsModule.forFeature([Crud2Effects]),
  ]
})
export class Crud2StoreModule { }
