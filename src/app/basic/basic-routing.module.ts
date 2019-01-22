import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '@app/basic/basic.component';

const routes: Routes = [{
  path: 'basic',
  component: BasicComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule {
  static components = [
    BasicComponent
  ];
}

