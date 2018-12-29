import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideEffectsComponent } from './side-effects.component';

const routes: Routes = [{
  path: '',
  component: SideEffectsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideEffectsRoutingModule {
  static components = [
    SideEffectsComponent
  ];
 }
