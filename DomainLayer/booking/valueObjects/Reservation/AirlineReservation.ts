import { Reservation } from "./Reservation";

export class AirlineReservation extends Reservation{

    constructor(
        provider: string,
        contractCode: string,
        private originAirportCode?: string,
        private originFlightNumber?: string,
        private returnFlightAirportCode?: string,
        private returnFlightNumber?: string,

    ){
        super('AIRLINE', provider, contractCode);
    }
    public setupOriginFlightInformation(date: Date, originAirportCode: string, originFlightNumber: string): void {
        this.startDate = date;
        this.originAirportCode = originAirportCode;
        this.originFlightNumber = originFlightNumber;
      }
      
      public setupReturnFlightInformation(date: Date, returnAirportCode: string, returnFlightNumber: string): void {
        this.endDate = date;
        this.returnFlightAirportCode = returnAirportCode;
        this.returnFlightNumber = returnFlightNumber;
      }
      

}