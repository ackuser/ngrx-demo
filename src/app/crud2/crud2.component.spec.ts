import { async, TestBed } from '@angular/core/testing';
import { Crud2Component } from '@app/crud2/crud2.component';

describe('Crud2Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Crud2Component
      ],
    }).compileComponents();
  }));

  it('should create the Crud2Component component', () => {
    const fixture = TestBed.createComponent(Crud2Component);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});

