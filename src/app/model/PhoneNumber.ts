export class PhoneNumber{


  constructor(
    private _number: string,
    private _countryCallingCode: string
  ) {
  }


  get number(): string {
    return this._number;
  }


  get countryCallingCode(): string {
    return this._countryCallingCode;
  }
}
