"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
//Strategic Pattern: Value Object
class Address {
    constructor(street, street2, city, state, zip, isPrimary) { }
}
exports.Address = Address;
/*  sintaxis java
export class Address {
  street: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  isPrimary: boolean;

  constructor(
    street: string, street2: string, city: string, state: string, zip: string, isPrimary: boolean) {
    this.street = street;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.isPrimary = isPrimary;
  }
}
*/ 
