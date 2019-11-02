import { Injectable } from '@angular/core';
import { employees } from '../data/employees';
import { IEmployee } from '../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  ListEmployee() {
    return JSON.parse(localStorage.getItem('employees'));
  }

  ListEmployeeByID(id: string) {
    // tslint:disable-next-line: no-shadowed-variable
    const employees = JSON.parse(localStorage.getItem('employees'));
    return employees.filter(emp => emp.id === id);
  }

  AddEmployee(employee: IEmployee) {
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  UpdateEmployee(id: string, employee: IEmployee) {
    // tslint:disable-next-line: no-shadowed-variable
    let employees: any;
    const findEmp = this.ListEmployeeByID(id);
    if (findEmp !== null) {
      employees = JSON.parse(localStorage.getItem('employees'));
      employees = employees.filter(emp => emp.id !== id);
      employees.push(employee);
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }

  DeleteEmployee(id: string) {
    // tslint:disable-next-line: no-shadowed-variable
    let employees: any;
    const findEmp = this.ListEmployeeByID(id);
    if (findEmp !== null) {
      employees = JSON.parse(localStorage.getItem('employees'));
      employees = employees.filter(emp => emp.id !== id);
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }

}
