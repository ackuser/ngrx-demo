import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../root-store';
import { Employee } from './../../in-memory-api/employee.interface';
import { Crud2StoreModule } from './crud2-store.module';
import * as Crud2StoreActions from './crud2.actions';
import * as Crud2StoreSelectors from './crud2.selectors';

@Injectable({ providedIn: Crud2StoreModule })
export class Crud2StoreFacade {


  // NGRX Observable Select Queries available for consumption by components
  public isLoading$: Observable<boolean> = this.store$.pipe(select(Crud2StoreSelectors.selectCrud2LoadingStatus));

  public employees$: Observable<Employee[]> = this.store$.pipe(select(Crud2StoreSelectors.selectCrud2AllEmpolyees));

  public errorMessage$: Observable<string> = this.store$.pipe(select(Crud2StoreSelectors.selectCrud2Error));

  constructor(private store$: Store<fromRoot.State>) {}

  // NGRX Action dispatchers available for components to dispatch actions
  public loadAllEmployee() {
    this.store$.dispatch(new Crud2StoreActions.CRUD2EmployeeLoadRequest());
  }

  public addEmployee(employee: Employee) {
    employee.id = null;
    this.store$.dispatch(new Crud2StoreActions.CRUD2EmployeeCreateRequest(employee));
  }

  public updateEmployee(employee: Employee) {
    this.store$.dispatch(new Crud2StoreActions.CRUD2EmployeeUpdateRequest(employee));
  }

  public deleteEmployee(id: number | null) {
    this.store$.dispatch(new Crud2StoreActions.CRUD2EmployeeDeleteRequest(id));
  }

}
