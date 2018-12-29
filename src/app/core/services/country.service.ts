import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  public getCountryDetail(countryName: String):  Observable<any> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
    .pipe(
      tap((response: any) => {
       console.log(response);
      }),
      map((response: any) => {
        const country: Country = new Country();
        const countryResponse = response[0];
        country.name =  countryResponse.name;
        country.capital =  countryResponse.capital;
        country.region =  countryResponse.region;
        country.population =  countryResponse.population;
        country.currency =  countryResponse.currencies[0].code;
        country.flag = countryResponse.flag;
        return country;
      }),
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public getCountries(searchKey: string):  Observable<any> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${searchKey}`)
    .pipe(
      map((response: any) => {
        const countries: Country[] = [];
        response.forEach(countryResponse => {
          const country: Country = new Country();
          country.name =  countryResponse.name;
          country.capital =  countryResponse.capital;
          country.region =  countryResponse.region;
          country.population =  countryResponse.population;
          country.currency =  countryResponse.currencies[0].code;
          country.flag = countryResponse.flag;
          countries.push(country);
        });
        return countries;
      }),
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public handleAndThrowRemoteError(error: Error | HttpErrorResponse | any): Observable<any> {
    let errorMessage = 'An error occurred: ';
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error caught while making remote Service call', error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage += `An error occurred at client: ${error.error.message}`;
    } else {
         // Server-Side Error: The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.error && error.error.status) {
        errorMessage += `Backend service returns error - ${error.error.status}: ${error.error.message}`;
      } else {
        errorMessage += `Backend service returns error - ${error.status}: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }

}
