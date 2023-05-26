"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proposal = void 0;
/**
 * Strategic Pattern: Entity
 * Created when a customer calls ACME to buy package; provides their preferences.
 * 1. Reservation place holder are created using the VacationPackage
 * 2. Dates and other preferences are then set on the Reservation placeholders
 *    e.g., Hotel reservation, Airline reservation etc
 * Customer may request creation of multiple proposals
 * Model: Acme Sales
 * Represents the sale proposal prepared for the customer
 */
class Proposal {
    constructor(reference, custumeReference, vacationPackage, createddate, 
    //no entiendo que hacer con lo siguiente>>
    reservations = []) {
        this.reference = reference;
        this.custumeReference = custumeReference;
        this.vacationPackage = vacationPackage;
        this.createddate = createddate;
        this.reservations = reservations;
    }
    getReference() {
        return this.reference;
    }
    getReservationIndex(index) {
        return this.reservations[index];
    }
    // se acede a la reserva y se le crean las fechas 
    setupReservationDates(index, startDate, endDate) {
        if (index >= this.reservations.length)
            return false;
        return this.reservations[index].setupDates(startDate, endDate);
    }
}
exports.Proposal = Proposal;
