import { async, TestBed } from '@angular/core/testing';
import { Search2Component } from '@app/search2/search2.component';

describe('Search2Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Search2Component
      ],
    }).compileComponents();
  }));

  it('should create the Search2Component component', () => {
    const fixture = TestBed.createComponent(Search2Component);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});

