export class Email{

  constructor(
    private _localPart: string,
    private _domain: string,
    private complete: string,
    ) {
  }


  get localPart(): string {
    return this._localPart;
  }

  get domain(): string {
    return this._domain;
  }
}
