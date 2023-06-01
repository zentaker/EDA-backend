import { Booking } from "../../DomainLayer/booking/Booking";
import {sendMessageToQueue} from '../../infrastructureLayer/rabbitmq/PubSubServiceTest'

export class messagingService{

    subscribe(booking: Booking) {

        const bookingm = JSON.stringify(booking);
        sendMessageToQueue(bookingm);





    }



    
}