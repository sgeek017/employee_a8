import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { IEmployee } from 'src/app/model/employee';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id: string;
  employees: IEmployee[];
  constructor(
    private _employeeService: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params.id;
    });
    // this.employees = this._employeeService.ListEmployeeByID(this.id);
    this._employeeService.ListEmployeeByID(this.id).subscribe((res) => {
      this.employees = res;
    });
  }

}
