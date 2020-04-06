import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '@app/basic/basic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic' },
  { path: 'basic', component: BasicComponent },
  { path: 'lazy-load', loadChildren: () => import('@app/lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
  { path: 'side-effects', loadChildren: () => import('@app/side-effects/side-effects.module').then(m => m.SideEffectsModule) },
  { path: 'search', loadChildren: () => import('@app/search/search.module').then(m => m.SearchModule) },
  { path: 'search2', loadChildren: () => import('@app/search2/search2.module').then(m => m.Search2Module) },
  { path: 'crud', loadChildren: () => import('@app/crud/crud.module').then(m => m.CrudModule) },
  { path: 'crud2', loadChildren: () => import('@app/crud2/crud2.module').then(m => m.Crud2Module) },
  { path: '**', pathMatch: 'full', component: BasicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
