import { async, TestBed } from '@angular/core/testing';
import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasicComponent
      ],
    }).compileComponents();
  }));

  it('should create the basic component', () => {
    const fixture = TestBed.createComponent(BasicComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});

