import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { filter } from 'minimatch';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: IEmployee[];
  employeesLocal: IEmployee[];
  filter: string;
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employees = this._employeeService.ListEmployee();
    this.employeesLocal = this._employeeService.ListEmployee();
    this.onSort();
  }

  onSort() {
    // tslint:disable-next-line: variable-name
    this.employees = Object.assign([], this.employees).sort((_a, _b) => _a.id - _b.id);
  }

  onFilter(res) {
    this.employees = this.employeesLocal;
    this.filter = res;
    if (res !== '') {
      this.employees = this.employees.filter((emp: IEmployee) => {
        return emp.id.toLocaleLowerCase().includes(res.toLocaleLowerCase()) ||
          emp.name.toLocaleLowerCase().includes(res.toLocaleLowerCase()) ||
          emp.location.toLocaleLowerCase().includes(res.toLocaleLowerCase()) ||
          emp.email.toLocaleLowerCase().includes(res.toLocaleLowerCase()) ||
          emp.mobile.toLocaleLowerCase().includes(res.toLocaleLowerCase());
      });
    }
    this.onSort();
  }

  onDelete(id) {
    this._employeeService.DeleteEmployee(id);
    this.employees = this._employeeService.ListEmployee();
    this.employeesLocal = this._employeeService.ListEmployee();
    this.onFilter(this.filter);
  }

}
