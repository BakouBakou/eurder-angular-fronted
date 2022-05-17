import {Email} from "./Email";
import {Address} from "./Address";
import {PhoneNumber} from "./PhoneNumber";

export class Customer {

  private _id!: number;

  constructor(
    private firstname: string,
    private lastname: string,
    private email: Email,
    private address: Address,
    private phoneNumber: PhoneNumber
  ) {
  }

  get id(): number {
    return this._id;
  }

}
