import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { EmployeeService } from './service/employee.service';
import { EmployeeComponent } from './component/list-employee/employee/employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
