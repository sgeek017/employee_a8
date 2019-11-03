import { Injectable } from '@angular/core';
import { employees } from '../data/employees';
import { IEmployee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  SERVER_URL = 'api/emp';

  constructor(private _httpClient: HttpClient) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  ListEmployee(): Observable<IEmployee[]> {
    // return JSON.parse(localStorage.getItem('employees'));
    return this._httpClient.get<IEmployee[]>(this.SERVER_URL).pipe(
      catchError(this.handleError)
    );
  }

  ListEmployeeByID(id: string): Observable<IEmployee[]> {
    // tslint:disable-next-line: no-shadowed-variable
    // const employees = JSON.parse(localStorage.getItem('employees'));
    // return employees.filter(emp => emp.id === id);
    return this._httpClient.get<IEmployee[]>(this.SERVER_URL).pipe(
      map((data: IEmployee[]) => {
        return data.filter(emp => emp.id === id);
      }),
      catchError(this.handleError)
    );

  }

  AddEmployee(employee: IEmployee): Observable<IEmployee> {
    // employees.push(employee);
    // localStorage.setItem('employees', JSON.stringify(employees));
    return this._httpClient.post<IEmployee>(this.SERVER_URL, employee, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  UpdateEmployee(id: string, employee: IEmployee): Observable<null | IEmployee> {
    // tslint:disable-next-line: no-shadowed-variable
    // let employees: any;
    // const findEmp = this.ListEmployeeByID(id);
    // if (findEmp !== null) {
    //   employees = JSON.parse(localStorage.getItem('employees'));
    //   employees = employees.filter(emp => emp.id !== id);
    //   employees.push(employee);
    //   localStorage.setItem('employees', JSON.stringify(employees));
    // }
    const url = `${this.SERVER_URL}/${id}`;
    return this._httpClient.put<IEmployee>(url, employee, cudOptions).pipe(
      catchError(this.handleError)
    );

    // return this._httpClient.get<IEmployee[]>(this.SERVER_URL).pipe(
    //   map((data: IEmployee[]) => {
    //     const employees = data.filter(emp => emp.id === id);
    //     employees.push(employee);
    //     return employees;
    //   }),
    //   catchError(this.handleError)
    // );

  }

  DeleteEmployee(id: string): Observable<IEmployee> {
    // tslint:disable-next-line: no-shadowed-variable
    // let employees: any;
    // const findEmp = this.ListEmployeeByID(id);
    // if (findEmp !== null) {
    //   employees = this.ListEmployee().filter(emp => emp.id !== id);
    //   localStorage.setItem('employees', JSON.stringify(employees));
    // }

    const url = `${this.SERVER_URL}/${id}`;
    return this._httpClient.delete<IEmployee>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
    
  }


  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }

}
