import { EventHandler } from "../EventHandler"

export class PaymentRecive implements EventHandler{ // handler
    public handle(event: Event) {
        //aca es donde el evento es controlado
        //1. el payload del evento es paymentAudit type




        console.log('handlerexecuted')
    }

}