import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search2Component } from '@app/search2/search2.component';

const routes: Routes = [{
  path: '',
  component: Search2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search2RoutingModule {
  static components = [
    Search2Component
  ];
}
