import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeComponent } from './component/list-employee/employee/employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'details/:id', component: EmployeeComponent },
  { path: 'editEmployee/:id', component: EditEmployeeComponent },


  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
