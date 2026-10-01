import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Employee {
    // detials = [
    //     { id: 1, name: 'Vinodh', role: 'Developer' },
    //     { id: 2, name: 'Rahul', role: 'Tester' },
    //     { id: 3, name: 'Suresh', role: 'Designer' }
    // ];
    private cartSubject = new BehaviorSubject<any[]>([]);

    cart$ = this.cartSubject.asObservable();
    constructor(private http: HttpClient) {
    }
    getEmployees() {
        return this.http.get('https://dummyjson.com/products');
    }
    addToCart(product: any) {
        const currentCart = this.cartSubject.value;
        const alreadyExists = currentCart.some(
            (item: any) => item.id === product.id
        );

        if (!alreadyExists) {
            this.cartSubject.next([...currentCart, product]);
        }
    }
}
