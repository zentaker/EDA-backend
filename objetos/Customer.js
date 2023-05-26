"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
//Strategic Pattern: Entity
class Customer {
    constructor(reference, fName, mName, lName, address, phoneNumber, email) {
        this.reference = reference;
        this.fName = fName;
        this.mName = mName;
        this.lName = lName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getAddress() {
        return this.address;
    }
    /**
     * Return the customer reference
     */
    getReference() {
        return this.reference;
    }
    toString() {
        let str = `reference=${this.reference}\n`;
        str += `Name=${this.fName} ${this.mName} ${this.lName}\n`;
        str += `Email=${this.email} Phone=${this.phoneNumber}\n`;
        return str;
    }
}
exports.Customer = Customer;
