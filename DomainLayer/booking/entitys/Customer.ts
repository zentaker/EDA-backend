import { Address } from "../valueObjects/Adress";

//Strategic Pattern: Entity
export class Customer {
    constructor(
      private reference: number,
      private fName: string, 
      private mName: string, 
      private lName: string, 
      private address: Address, 
      private phoneNumber: string, 
      private email: string,
      ) {}
 
    public getEmail(): string {
      return this.email;
    }
  
    public getPhoneNumber(): string {
      return this.phoneNumber;
    }
  
    public getAddress(): Address {
      return this.address;
    }
  
    /**
     * Return the customer reference
     */
    public getReference(): number {
      return this.reference;
    }
  

  
    public toString(): string {
      let str = `reference=${this.reference}\n`;
      str += `Name=${this.fName} ${this.mName} ${this.lName}\n`;
      str += `Email=${this.email} Phone=${this.phoneNumber}\n`;
  
      return str;
    }
  }