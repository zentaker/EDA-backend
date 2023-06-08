import { PaymentAudit } from "../../DomainLayer/PaymentAudit"
import { EventHandler } from "../EventHandler"
import { Event } from "../Event"
import { BookingRepository } from "../../Tests/TestRepositorys/bookingRepositorio";


export class PaymentRecive implements EventHandler{ // handler


    handle(event: Event): any {
       
        // aca es donde el evento es handleado
        //1. get the booking confirmation from the event
        const data = event.payload as PaymentAudit;
        console.log('data:  '+ JSON.stringify(data));
        const bookingreference = data.bookingReference;
        console.log(bookingreference);

        //2. obtiene el booking de el repositorio
        const bookingrepository = (global as any).bookingRepo;
        const booking = bookingrepository.get(bookingreference);
        console.log(booking);
         //3.update el estado de el booking
        booking.setPaymentConfirmation();
        console.log(booking);
        //5. call the reservation fucntion
        console.log('kick off the reservations process');
        booking.reserve();
        console.log('handlerexecuted')
    }

}