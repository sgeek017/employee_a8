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
    this.onLoad();
    this.onSort();
  }

  onLoad() {
    this._employeeService.ListEmployee()
      .subscribe(
        (res: IEmployee[]) => {
          this.employees = res;
          this.employeesLocal = res;
          this.onFilter(this.filter);
        },
        (error) => {
          console.log(error);
        });
  }

  onSort() {
    // tslint:disable-next-line: variable-name
    this.employees = Object.assign([], this.employees).sort((_a, _b) => _a.id - _b.id);
  }

  onFilter(res) {
    this.employees = this.employeesLocal;
    this.filter = res;
    if (this.filter) {
      this.employees = this.employees.filter((emp: IEmployee) => {
        return emp.id.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()) ||
          emp.name.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()) ||
          emp.location.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()) ||
          emp.email.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()) ||
          emp.mobile.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase());
      });
    }
    this.onSort();
  }

  onDelete(id) {
    this._employeeService.DeleteEmployee(id).subscribe(
      (res) => {
        this.onLoad();
      },
      (error) => {
        console.log(error);
      });

  }

}
