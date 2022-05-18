import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {first} from "rxjs";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  customers: Customer[] = [];
  searchText: string = '';

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  onNewCustomer() {
    this.router.navigateByUrl('/customers/create');
  }

  private getCustomers() {
    this.customerService.getCustomers().pipe(first()).subscribe(customers => {
      console.log(customers[3]);
      this.customers = customers;
    });
  }
}
