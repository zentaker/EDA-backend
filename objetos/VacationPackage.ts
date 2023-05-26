import { DateUtility } from "./utils/DateUtility";
import { Reservation } from "./Reservation/Reservation";


//Strategic Pattern: Entity
export class VacationPackage {
    constructor(
        private reference: number,
        private name: string,
        private description: string,
        private numberOfNights: number,
        private packageType: 'RESORT'| 'CRUISE'|'HOTEL_AIR'| 'HOTEL_AIR_CAR',
        private retailPrice: number,
        private validTill: string,
        private active: boolean,
        private soldOut: boolean,
        private destination: string,
        private reservationHolders: Reservation[]

    ) {}

    public getName(): string {
        return this.name;
      }
    
      public getNumberOfNights(): number {
        return this.numberOfNights;
      }
    
      public getDestination(): string {
        return this.destination;
      }
      public getReference(): number {
        return this.reference;
      }



      public toString(): string {
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

