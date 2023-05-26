"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    constructor(reservationType, provider, contractCode, reservationReference, cancellationReference, status, startDate, endDate) {
        this.reservationType = reservationType;
        this.provider = provider;
        this.contractCode = contractCode;
        this.reservationReference = reservationReference;
        this.cancellationReference = cancellationReference;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getReservationReference() {
        return this.reservationReference;
    }
    getCancellationReference() {
        return this.cancellationReference;
    }
    getReservationType() {
        return this.reservationType;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getStatus() {
        if (this.cancellationReference != null) {
            return this.status = 'CANCELLED';
        }
        else if (this.reservationReference != null) {
            return this.status = 'CONFIRMED';
        }
        return this.status = 'UNKNOWN';
    }
    // formato de fechas >>>
    setupDates(startDate, endDate) {
        /** Rules for validation of dates **/
        this.startDate = startDate;
        this.endDate = endDate;
        return true;
    }
    toString() {
        return `reservationType=${this.reservationType} Provider=${this.provider}`;
    }
}
exports.Reservation = Reservation;
