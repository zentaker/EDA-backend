"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacationPackage = void 0;
//Strategic Pattern: Entity
class VacationPackage {
    constructor(reference, name, description, numberOfNights, packageType, retailPrice, validTill, active, soldOut, destination, reservationHolders) {
        this.reference = reference;
        this.name = name;
        this.description = description;
        this.numberOfNights = numberOfNights;
        this.packageType = packageType;
        this.retailPrice = retailPrice;
        this.validTill = validTill;
        this.active = active;
        this.soldOut = soldOut;
        this.destination = destination;
        this.reservationHolders = reservationHolders;
    }
    getName() {
        return this.name;
    }
    getNumberOfNights() {
        return this.numberOfNights;
    }
    getDestination() {
        return this.destination;
    }
    getReference() {
        return this.reference;
    }
    toString() {
        let str = `Name=${this.name}`;
        str += ` Number nights=${this.numberOfNights} Dest=${this.destination}`;
        str += ` retailPrice=${this.retailPrice}`;
        str += "[";
        for (const r of this.reservationHolders) {
            str += `\t${r}`;
        }
        str += "]";
        return str;
    }
}
exports.VacationPackage = VacationPackage;
