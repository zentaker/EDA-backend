"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
class CustomerRepository {
    constructor() {
        this.customers = [];
    }
    add(customer) {
        this.customers.push(customer);
    }
    get(reference) {
        // Loop through the collection
        for (const customer of this.customers) {
            if (customer.getReference() === reference) {
                return customer;
            }
        }
        return null;
    }
    getAll() {
        return this.customers;
    }
    remove(reference) {
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
exports.CustomerRepository = CustomerRepository;
