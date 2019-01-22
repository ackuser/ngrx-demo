import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@core/services/country.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input() public countries: Country;
  @Input() public errorMessage: string;
  @Input() public isLoading: boolean;

  public trackByFn(index: any, item: any) {
    return index;
  }

}
