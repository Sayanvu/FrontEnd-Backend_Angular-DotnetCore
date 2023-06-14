import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApIUrl:string  ="https://localhost:44372";
  constructor(private _obj:HttpClient) { }

 getAllEmployees(): Observable<Employee[]>
  {
    return this._obj.get<Employee[]>(this.baseApIUrl + '/api/employees');
  }
  addEmployee(addEmployeeRequest:Employee): Observable<Employee[]>
  {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this._obj.post<Employee[]>(this.baseApIUrl + '/api/employees',addEmployeeRequest);
    
  }

  getEmployee(id:string): Observable<Employee>
  {
    return this._obj.get<Employee>(this.baseApIUrl+ '/api/employees/'+id);
  }


  updateEmployee(id:string,updateEmployeeRequest:Employee): Observable<Employee> 
  {
    return this._obj.put<Employee>(this.baseApIUrl+ '/api/employees/'+id,updateEmployeeRequest);
  }

  // getcurrentdata(id:string){
  //   return this._obj.get('${this.baseApIUrl}  ${id}')
  // }

  deleteEmployee(id:string): Observable<Employee>
  {
    return this._obj.delete<Employee>(this.baseApIUrl + '/api/employees/' +id);
  }

}
