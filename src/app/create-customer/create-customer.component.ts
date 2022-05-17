import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Country} from "../model/Country";
import {CustomerService} from "../services/customer.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {


  countries: string[] = Object.values(Country);

  createCustomerForm = this.formBuilder.group({
    firstname: '',
    lastname: '',
  });

  emailForm = this.formBuilder.group({
    localPart: '',
    domain: '',
  });
  addressForm = this.formBuilder.group({
    streetName: '',
    houseNumber: '',
    postalCode: '',
    country: ''
  });
  phoneNumberForm = this.formBuilder.group({
    number: '',
    countryCallingCode: ''
  });

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.createCustomerForm.addControl('address', this.addressForm);
    this.createCustomerForm.addControl('email', this.emailForm);
    this.createCustomerForm.addControl('phoneNumber', this.phoneNumberForm);

  }

  onSubmit() {
    console.log(this.createCustomerForm.value);
    this.customerService.addCustomer(this.createCustomerForm.value)
      .pipe(first())
      .subscribe((customer) => this.router.navigateByUrl('/customers/' + customer.id));
  }

  onCancel() {
    this.router.navigateByUrl('/customers');
  }

}
