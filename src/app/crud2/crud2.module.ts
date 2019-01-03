import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InMemoryApiModule } from './../in-memory-api/in-memory-api.module';
import { Crud2RoutingModule } from './crud2-routing.module';
import { Crud2StoreModule } from './store';

@NgModule({
  imports: [
    SharedModule,
    InMemoryApiModule,
    Crud2StoreModule,
    Crud2RoutingModule
  ],
  declarations: [Crud2RoutingModule.components]
})
export class Crud2Module { }
