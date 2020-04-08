import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@app/in-memory-api/employee.interface';
import { InMemoryApiModule } from '@app/in-memory-api/in-memory-api.module';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: InMemoryApiModule
})
export class EmployeeService {

  private apiEmployeeURL = `api/employees`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEmployeeURL)
    .pipe(
      map((response: any) => {
        return response as Employee[];
      }),
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      this.apiEmployeeURL,
      employee,
      { headers: this.headers }
    )
    .pipe(
      map((response: any) => {
        return response as Employee;
      }),
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiEmployeeURL}/${employee.id}`;
    return this.http.put<Employee>(
      url,
      employee,
      { headers: this.headers }
    )
    .pipe(
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public removeEmployee(id: number): Observable<number> {
    const url = `${this.apiEmployeeURL}/${id}`;
    return this.http.delete<number>(
      url,
      { headers: this.headers }
    )
    .pipe(
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
    console.error(`%c Error caught while making remote Service call`, `color: #F44336; font-weight: bold`, error);
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
