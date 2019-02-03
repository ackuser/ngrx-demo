import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
// import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Object;
  private apiAppConfigURL = `api/config`;

  constructor(private http: HttpClient) {}

  public loadAppConfig():  Observable<any[]> {
    /* In real world you will get it from configuration file*/
    // const envConfigFilePath = environment.configFilePath;
    // return this.httpClient.get<any>(envConfigFilePath)
    return this.http.get<any[]>(this.apiAppConfigURL)
    .pipe(
      map((response: any) => {
        if ( !Array.isArray(response) || !response.length || Object.keys(response[0]).length === 0) {
          // array does not exist, is not an array, or is empty
          throw new Error('Application Configuration is empty');
        } else {
          this.config = response;
          return response as any[];
        }
      }),
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  getValue(key: string) {
    // Get value of config key:
    return this.config[key];
  }

  private handleAndThrowRemoteError(error: Error | HttpErrorResponse | any): Observable<any> {
    let errorMessage = 'An error occurred while loading appliation config: ';
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

