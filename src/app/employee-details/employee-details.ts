import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee } from '../employee';

@Component({
  imports: [RouterLink],
  selector: 'app-employee-details',
  styleUrl: './employee-details.scss',
  templateUrl: './employee-details.html',
})
export class EmployeeDetails {
  employees: any;
  selectedEmployee: any;
  constructor(private route: ActivatedRoute, private employeeService: Employee) {

    // this.employees = this.employeeService.detials;
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
      this.findEmployes();
    });


  }
  findEmployes() {
    console.log(this.employees, "24");
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id, "27");

    this.selectedEmployee = this.employees.find(
      (emp: any) => emp.id === Number(id)
    );
    console.log(this.selectedEmployee, "SELECTED EMPLOYEE");
  }
}
