import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic' },
  { path: 'basic', component: BasicComponent },
  { path: 'lazy-load', loadChildren: './lazy-load/lazy-load.module#LazyLoadModule' },
  { path: 'side-effects', loadChildren: './side-effects/side-effects.module#SideEffectsModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'search2', loadChildren: './search2/search2.module#Search2Module' },
  { path: 'crud', loadChildren: './crud/crud.module#CrudModule' },
  { path: 'crud2', loadChildren: './crud2/crud2.module#Crud2Module' },
  { path: '**', pathMatch: 'full', component: BasicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
