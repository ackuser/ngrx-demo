import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '@app/basic/basic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic' },
  { path: 'basic', component: BasicComponent },
  { path: 'lazy-load', loadChildren: '@app/lazy-load/lazy-load.module#LazyLoadModule' },
  { path: 'side-effects', loadChildren: '@app/side-effects/side-effects.module#SideEffectsModule' },
  { path: 'search', loadChildren: '@app/search/search.module#SearchModule' },
  { path: 'search2', loadChildren: '@app/search2/search2.module#Search2Module' },
  { path: 'crud', loadChildren: '@app/crud/crud.module#CrudModule' },
  { path: 'crud2', loadChildren: '@app/crud2/crud2.module#Crud2Module' },
  { path: '**', pathMatch: 'full', component: BasicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
