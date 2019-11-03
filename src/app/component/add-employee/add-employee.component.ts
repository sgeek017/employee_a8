import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../../model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  countries: string[] = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  constructor(
    private _employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit(emp: IEmployee) {
    emp.id = uuid().substring(0, 8);
    // this._employeeService.AddEmployee(emp);
    this._employeeService.AddEmployee(emp).subscribe(
      (res) => {
        this.router.navigate(['contextroot/employees']);
      },
      (error) => {
        console.log(error);
      });
  }

}
