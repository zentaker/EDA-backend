import { DateUtility } from "../utils/DateUtility";


export class Reservation {
    constructor(
        private reservationType: 'HOTEL'|'AIRLINE'|'CAR_RENTAL'|'CRUISE'|'RESORT',
        private provider: string,
        private contractCode: string,
        private reservationReference?: string,
        private cancellationReference?: string, 
        private status?: 'UNKNOWN'|'CONFIRMED'|'CANCELLED',
        protected startDate?: Date,
        protected endDate?: Date,


        ) {
     
      }
     
  public getReservationReference() {
    return this.reservationReference;
  }

  public getCancellationReference() {
    return this.cancellationReference;
  }

  public getReservationType(): string {
    return this.reservationType;
  }

  public getStartDate()  {
    return this.startDate;
  }

  public getEndDate()  {
    return this.endDate;
  }

  public getStatus(): string {
    if (this.cancellationReference != null) {
      return this.status = 'CANCELLED';
    } else if (this.reservationReference != null) {
      return this.status = 'CONFIRMED';
    }

    return this.status = 'UNKNOWN';
  }
  
  // formato de fechas >>>
  public setupDates(startDate: Date, endDate: Date): boolean {
    /** Rules for validation of dates **/
    this.startDate = startDate;
    this.endDate = endDate;
    return true;
  }

  public toString(): string {
    return `reservationType=${this.reservationType} Provider=${this.provider}`;
  }



      
    

}