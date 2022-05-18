import {Email} from "./Email";
import {Address} from "./Address";
import {PhoneNumber} from "./PhoneNumber";

export class Customer {

  constructor(
    private _id: string,
    private _firstname: string,
    private _lastname: string,
    private _email: Email,
    private _address: Address,
    private _phoneNumber: PhoneNumber,
  ) {}

  get id(): string {
    return this._id;
  }


  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

}
