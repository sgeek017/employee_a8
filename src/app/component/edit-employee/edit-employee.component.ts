import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IEmployee } from 'src/app/model/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: string;
  employee: IEmployee;
  countries: string[] = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  constructor(
    private _employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params.id;
    });
    this.employee = this._employeeService.ListEmployeeByID(this.id)[0];
  }

  onSubmit(id: string, emp: IEmployee) {
    console.log(id, emp);
    emp.id = id;
    this._employeeService.UpdateEmployee(emp.id, emp);
    this.router.navigate(['contextroot/employees']);
  }

}
