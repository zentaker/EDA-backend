import { Reservation} from "./Reservation";


export class HotelReservation extends Reservation{

    constructor(
        provider: string,
        contractCode: string,


    ){
        super('HOTEL', provider, contractCode);
    }


}