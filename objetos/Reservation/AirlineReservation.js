"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirlineReservation = void 0;
const Reservation_1 = require("./Reservation");
class AirlineReservation extends Reservation_1.Reservation {
    constructor(provider, contractCode, originAirportCode, originFlightNumber, returnFlightAirportCode, returnFlightNumber) {
        super('AIRLINE', provider, contractCode);
        this.originAirportCode = originAirportCode;
        this.originFlightNumber = originFlightNumber;
        this.returnFlightAirportCode = returnFlightAirportCode;
        this.returnFlightNumber = returnFlightNumber;
    }
    setupOriginFlightInformation(date, originAirportCode, originFlightNumber) {
        this.startDate = date;
        this.originAirportCode = originAirportCode;
        this.originFlightNumber = originFlightNumber;
    }
    setupReturnFlightInformation(date, returnAirportCode, returnFlightNumber) {
        this.endDate = date;
        this.returnFlightAirportCode = returnAirportCode;
        this.returnFlightNumber = returnFlightNumber;
    }
}
exports.AirlineReservation = AirlineReservation;
