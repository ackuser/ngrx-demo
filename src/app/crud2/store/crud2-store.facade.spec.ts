/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { Crud2StoreFacade } from '@app/crud2/store/crud2-store.facade';

describe('Service: Crud2StoreFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Crud2StoreFacade]
    });
  });

  it('should ...', inject([Crud2StoreFacade], (service: Crud2StoreFacade) => {
    expect(service).toBeTruthy();
  }));
});
