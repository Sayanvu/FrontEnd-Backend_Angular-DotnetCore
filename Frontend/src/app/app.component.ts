import { Component } from '@angular/core';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EmployeesService } from './services/employees.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend_angular';
  users:any;
constructor(private _obj:EmployeesService){
  this._obj.getAllEmployees().subscribe((data)=>
    {
      console.warn("data",data);
    })
}

}
