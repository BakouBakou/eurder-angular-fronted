import {Country} from "./Country";

export class Address{

  constructor(
    private _streetName: string,
    private _houseNumber: string,
    private _postalCode: string,
    private _country: Country
  ) {
  }


  get streetName(): string {
    return this._streetName;
  }

  get houseNumber(): string {
    return this._houseNumber;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  get country(): Country {
    return this._country;
  }
}
