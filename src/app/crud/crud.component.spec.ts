import { async, TestBed } from '@angular/core/testing';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CrudComponent
      ],
    }).compileComponents();
  }));

  it('should create the CrudComponent component', () => {
    const fixture = TestBed.createComponent(CrudComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});

