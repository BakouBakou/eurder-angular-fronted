import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Country} from "../../model/Country";
import {CustomerService} from "../../services/customer.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  triedToSubmitForm: boolean = false;
  formIsValid!: boolean;
  countries: string[] = Object.values(Country);

  createCustomerForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
  });

  emailForm = this.formBuilder.group({
    localPart: ['', [Validators.required]],
    domain: ['', [Validators.required]],
  });
  addressForm = this.formBuilder.group({
    streetName: ['', [Validators.required]],
    houseNumber: ['', [Validators.required]],
    postalCode: ['', [Validators.required]],
    country: ['', [Validators.required]]
  });
  phoneNumberForm = this.formBuilder.group({
    number: ['', [Validators.required]],
    countryCallingCode: ['', [Validators.required]]
  });


  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.createCustomerForm.addControl('address', this.addressForm);
    this.createCustomerForm.addControl('email', this.emailForm);
    this.createCustomerForm.addControl('phoneNumber', this.phoneNumberForm);

  }

  onSubmit() {
    this.triedToSubmitForm = true;
    this.formIsValid = this.createCustomerForm.valid;
    if (this.formIsValid) {
      this.addCustomer();
    }
  }

  private addCustomer() {
    this.customerService.addCustomer(this.createCustomerForm.value)
      .pipe(first())
      .subscribe((customer) => this.router.navigateByUrl('/customers/' + customer.id));
  }

  onCancel() {
    this.router.navigateByUrl('/customers');
  }

}