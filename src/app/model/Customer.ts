import {Email} from "./Email";
import {Address} from "./Address";
import {PhoneNumber} from "./PhoneNumber";

export class Customer {

  constructor(
    private _id: string,
    private _firstname: string,
    private _lastname: string,
    private email: Email,
    private address: Address,
    private phoneNumber: PhoneNumber,
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
