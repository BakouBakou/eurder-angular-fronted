import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNewCustomer() {
    this.router.navigateByUrl('/customers/create');
  }

}
