"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
//Strategic Pattern: Aggregate
class Booking {
    constructor(reference, proposalreference) {
        this.reference = reference;
        this.proposalreference = proposalreference;
    }
}
exports.Booking = Booking;
