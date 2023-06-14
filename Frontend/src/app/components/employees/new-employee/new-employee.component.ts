import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

    addEmployeeRequest: Employee = {
    id:'',
    name:'',
    email:'',
    phone: 0,
    salary: 0, 
    department: ''
  };
 constructor(private employeeService:EmployeesService,private router:Router) {}
  ngOnInit(): void {

  }
  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>{
        this.router.navigate(['/employees' ]);
      }
    });
  }



}
