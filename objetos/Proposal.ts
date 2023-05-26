import { VacationPackage } from "./VacationPackage";
import { Reservation } from "./Reservation/Reservation";


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

export class Proposal {
    constructor(
        private reference: number,
        private custumeReference: number,
        private vacationPackage: VacationPackage | null,
        private createddate: Date,
        //no entiendo que hacer con lo siguiente>>
        private reservations: Reservation[] =[],
        //private passangers: Pax[],
        //private offer: Offer[],
        //private offerPrice,
        //private ProposalSatus: 'ACCEPTED'|'REJECTED' | 'ON-HOLD'


    ){}
    getReference() {
        return this.reference
    }
    getReservationIndex(index: number): Reservation | undefined {
        return this.reservations[index];
    }
    // se acede a la reserva y se le crean las fechas 
    public setupReservationDates(index: number, startDate: Date, endDate: Date): boolean {
        if (index >= this.reservations.length) return false;
        return this.reservations[index].setupDates(startDate, endDate);
    }
    


}

