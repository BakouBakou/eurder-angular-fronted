import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Country} from "../model/Country";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {


  countries: string[] = Object.values(Country);

  createCustomerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
  });

  emailForm = this.formBuilder.group({
    localPart: '',
    domain: '',
    complete: ''
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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createCustomerForm.addControl('address', this.addressForm);
    this.createCustomerForm.addControl('email', this.emailForm);
    this.createCustomerForm.addControl('phone', this.phoneNumberForm);

  }

  onSubmit() {
    console.log(this.createCustomerForm.value);
  }

}
