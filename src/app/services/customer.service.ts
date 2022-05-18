import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = `${environment.backendUrl}/customers`

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.url + '/' + id)  ;
  }
}
