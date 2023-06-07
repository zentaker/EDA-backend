import { PaymentAudit } from "../../DomainLayer/PaymentAudit"
import { EventHandler } from "../EventHandler"
import { Event } from "../Event"

export class PaymentRecive implements EventHandler{ // handler


    handle(event: Event): any {
        //aca es donde el evento es controlado




        
        //1. el payload del evento es paymentAudit type

        // aca es donde el evento es handleado
        //1. get the booking confirmation from the event
        //int bookingreferebce = PaymentAudit.getBookingReference();

        //2. obtiene el booking de el repositorio
        //Booking booking = BookingRepository.get(bookingreferebce);

        //3.update el estado de el booking




        console.log('handlerexecuted')
    }

}