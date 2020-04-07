import { TestBed } from '@angular/core/testing';
import { AppInitStoreFacade } from './app-init-store.facade';


describe('AppInitStore.Facade.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppInitStoreFacade = TestBed.inject(AppInitStoreFacade);
    expect(service).toBeTruthy();
  });
});
