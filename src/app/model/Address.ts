import {Country} from "./Country";

export class Address{

  constructor(
    private streetName: string,
    private houseNumber: string,
    private postalCode: string,
    private country: Country
  ) {
  }
}
