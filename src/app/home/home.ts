import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Employee } from '../employee';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  employees: any[] = [];
  private changeDetector = inject(ChangeDetectorRef);

  constructor(private employeeService: Employee) { }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      console.log(data, 'API DATA');
      this.employees = data.products;
      this.changeDetector.detectChanges();
      console.log(this.employees, 'EMPLOYEES');
    });
  }

  searchTerm = "";

  get filteredProducts() {
    if (this.searchTerm === '') {
      return this.employees;
    }

    return this.employees.filter(emp =>
      emp.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      emp.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  select: any[] = [];
  likeProduct(emp: any) {
    emp.liked = !emp.liked;
    if (emp.liked) {
      this.employeeService.addToCart(emp);
      this.select.push(emp);
    } else {
      const index = this.select.findIndex(
        product => product.id === emp.id
      );

      if (index !== -1) {
        this.select.splice(index, 1);
      }
    }
    console.log(this.select);
  }

  selectedEmployee: any = null;
  view(id: any) {
    const selectedId = this.employees.find((emp: any) => emp.id === id);
    this.selectedEmployee = selectedId;
  };
  del(id: any) {
    this.employees = this.employees.filter((emp: any) => {
      return emp.id !== id;
    });
    this.employees = this.employees.map((emp: any, index: number) => {
      return {
        ...emp,
        id: index + 1
      };
      
    });
    this.selectedEmployee = null
  };
}

