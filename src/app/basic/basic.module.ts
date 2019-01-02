import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicStoreState } from './store';

@NgModule({
  imports: [
    SharedModule,
     /**
     * StoreModule.forFeature is imported in this feature module, accepting a reducer
     * function or object map of reducer functions. It is used for composing state
     * from feature modules. These modules can be loaded eagerly or lazily and
     * will be dynamically added to the root state. First argument is name of the
     * feature state and second argument is a reducer or object map of reducer
     * which manages feature state
     */
    StoreModule.forFeature('basic', BasicStoreState.basicReducers),
    BasicRoutingModule // always import routing module as the last imported module
  ],
  declarations: [ BasicRoutingModule.components ]
})
export class BasicModule { }

