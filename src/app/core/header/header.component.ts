import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  public count: number;

  constructor(
    private router: Router
  ) {}

  public goBasic() {
    this.router.navigate(['basic']);
  }

  public goLazyLoad() {
    this.router.navigate(['lazy-load']);
  }

  public goSideEffects() {
    this.router.navigate(['side-effects']);
  }

  public goSearch() {
    this.router.navigate(['search']);
  }

  public goSearch2() {
    this.router.navigate(['search2']);
  }

  public goCrud() {
    this.router.navigate(['crud']);
  }

  public goCrud2() {
    this.router.navigate(['crud2']);
  }

}
