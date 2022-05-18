import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../services/customer.service";
import {first} from "rxjs";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer!: Customer;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let id = paramMap.get('id');
      this.getCustomerById(id || '');
    })
  }

  onBack() {
    this.router.navigateByUrl('/customers');
  }

  private getCustomerById(id: string) {
    this.customerService.getCustomerById(id).pipe(first()).subscribe(customer => this.customer = customer);
  }
}
