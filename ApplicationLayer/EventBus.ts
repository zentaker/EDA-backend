import { EventHandler } from "./EventHandler";
import { PaymentRecive } from "./PaymentRecive/PaymentreciveHandler";
import { EventDispatcher } from "./EventDispatcher";

/* encargado de recibir y distribuir los eventos en unn sistema, actua como intermediario entre los producers y consumers

el siguiente codigo asemeja rabitmq

*/
export class EventBus {
    



    static register(eventname: string, handler: EventHandler){
        const eventDispatcher = new EventDispatcher(eventname);
        return eventDispatcher.register(handler);

    }
}