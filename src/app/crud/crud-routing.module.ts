import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '@app/crud/crud.component';

const routes: Routes = [{
  path: '',
  component: CrudComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule {
  static components = [
    CrudComponent
  ];
}
