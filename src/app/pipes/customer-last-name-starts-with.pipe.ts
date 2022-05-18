import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "../model/Customer";

@Pipe({
  name: 'customerLastNameStartsWith'
})
export class CustomerLastNameStartsWithPipe implements PipeTransform {

  transform(value: Customer[], filter: string): Customer[] {
    return value.filter(customer => customer.lastname.toLowerCase().startsWith(filter.toLowerCase()));
  }

}
