import { VacationPackage } from "./VacationPackage";
import { Reservation } from "../valueObjects/Reservation/Reservation";


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
        private customerReference: number,
        private vacationPackage: VacationPackage | null,
        private createddate: Date,
        


        // una propuesta tiene varias reservaciones ya sea de avion de carro o hotel
        private reservations: Reservation[] =[],
        //private passangers: Pax[],
        //private offer: Offer[],
        //private offerPrice,
        //private ProposalSatus: 'ACCEPTED'|'REJECTED' | 'ON-HOLD'


    ){
        // en el momento de crear la popuesta tiene que clonar las reservaciones de los paquetes vacacionales >>>>>
        if (vacationPackage) {
            this.reservations = vacationPackage.clone()
        }
       
    }
    getReference() {
        return this.reference
    }
    getCustomerReference(): number {
        return this.customerReference;
      }
    
 
    getReservationIndex(index: number): Reservation | undefined {
        return this.reservations[index];
    }
  
    // se acede a la reserva y se le crean las fechas 
 
    public setupReservationDates(index: number, startDate: Date, endDate: Date): boolean {
        if (index >= this.reservations.length) return false;
        const reservation = this.reservations[index];
        console.log(startDate);
        reservation.setupDates(startDate, endDate);
        console.log(reservation.getStartDate())
        return true;
        
      }
    }

    



