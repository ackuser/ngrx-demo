import { Location } from '@angular/common';
import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BasicComponent } from '../../basic/basic.component';
import { BasicModule } from '../../basic/basic.module';
import { SearchComponent } from '../../search/search.component';
import { SearchModule } from '../../search/search.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BasicModule,
        SearchModule,
        RouterTestingModule.withRoutes([
          { path: 'basic', component: BasicComponent},
          { path: 'search', component: SearchComponent}
      ])],
      declarations: [ HeaderComponent ],
      providers: [
        // It triggers automatic change detection
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy('header component should exist');
  });

  it('should navigate to basic screen', fakeAsync(() => {
    component.goBasic();
    tick();
    expect(location.path()).toBe('/basic');
  }));

  it('should navigate to search screen', fakeAsync(() => {
    component.goSearch();
    tick();
    expect(location.path()).toBe('/search');
  }));

});
