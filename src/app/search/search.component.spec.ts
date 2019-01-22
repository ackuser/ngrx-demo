import { async, TestBed } from '@angular/core/testing';
import { SearchComponent } from '@app/search/search.component';

describe('SearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the SearchComponent component', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});

