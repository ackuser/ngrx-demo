import { NgModule } from '@angular/core';
import { SideEffectsRoutingModule } from '@app/side-effects/side-effects-routing.module';
import { SideEffectsEffects, sideEffectsReducer } from '@app/side-effects/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

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
    StoreModule.forFeature('sideEffects', sideEffectsReducer),
    /**
     * EffectsModule.forFeature() is imported to register effects from this
     * feature module and sets up the effects class to be initialized immediately
     * when this feature module is loaded. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature(
      [ SideEffectsEffects ]
    ),
    SideEffectsRoutingModule
  ],
  declarations: [SideEffectsRoutingModule.components]
})
export class SideEffectsModule { }
