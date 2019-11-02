import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeComponent } from './component/list-employee/employee/employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';


const routes: Routes = [
  { path: 'contextroot/employees', component: ListEmployeeComponent },
  { path: 'contextroot/addEmployee', component: AddEmployeeComponent },
  { path: 'contextroot/details/:id', component: EmployeeComponent },
  { path: 'contextroot/editEmployee/:id', component: EditEmployeeComponent },


  { path: '**', redirectTo: '/contextroot/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
