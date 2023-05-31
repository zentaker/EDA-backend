import { Customer } from "../DomainLayer/booking/entitys/Customer";


export class CustomerRepository {
  private customers: Customer[];

  constructor() {
    this.customers = [];
  }

  add(customer: Customer): void {
    this.customers.push(customer);
  }

  public get(reference: number): Customer | null {
    // Loop through the collection
    for (const customer of this.customers) {
        if (customer.getReference() === reference) {
            return customer;
        }
    }

    return null;
}
public getAll(): Customer[] {
    return this.customers;
  }

  remove(reference: number): boolean {
    // Loop through the collection
    for (const customerInCollection of this.customers) {
      if (customerInCollection.getReference() === reference) {
        this.customers.splice(this.customers.indexOf(customerInCollection), 1);
        return true;
      }
    }
  
    return false;
  }
  
}