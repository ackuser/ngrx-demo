import { NgModule } from '@angular/core';
import { Crud2RoutingModule } from '@app/crud2/crud2-routing.module';
import { Crud2StoreModule } from '@app/crud2/store';
import { InMemoryApiModule } from '@app/in-memory-api/in-memory-api.module';
import { SharedModule } from '@shared/shared.module';

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
