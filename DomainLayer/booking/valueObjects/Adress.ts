
//Strategic Pattern: Value Object
export class Address { 
    constructor(
      street: string, 
      street2: string, 
      city: string, 
      state: string, 
      zip: string, 
      isPrimary: boolean
      ) {}
  }

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