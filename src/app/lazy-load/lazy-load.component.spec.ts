import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadComponent } from '@app/lazy-load/lazy-load.component';


describe('Basic2Component', () => {
  let component: LazyLoadComponent;
  let fixture: ComponentFixture<LazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
