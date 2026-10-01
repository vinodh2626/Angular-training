import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.scss',
  templateUrl: './cart.html',
  standalone: true
})
export class Cart {
  cartProduct: any[] = [];

  constructor(private employeeService: Employee) {
  }

  ngOnInit() {

    this.employeeService.cart$.subscribe(product => {

      this.cartProduct = product;

      console.log('Cart Data:', this.cartProduct);

    });

  }
}
