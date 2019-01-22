import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crud2Component } from '@app/crud2/crud2.component';

const routes: Routes = [{
  path: '',
  component: Crud2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Crud2RoutingModule {
  static components = [
    Crud2Component
  ];
}
