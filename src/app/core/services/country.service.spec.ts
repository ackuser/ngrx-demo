import { inject, TestBed } from '@angular/core/testing';
import { CountryService } from '@core/services/country.service';


describe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryService]
    });
  });

  it('should ...', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
});
