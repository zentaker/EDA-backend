import { EventHandler } from "./EventHandler";
import { EventDispatcher } from "./EventDispatcher";
import { Event } from "./Event";

/* encargado de recibir y distribuir los eventos en unn sistema, actua como intermediario entre los producers y consumers

el siguiente codigo asemeja rabitmq seguro?
como es con rabbit mq cual es la logica

*/
export class EventBus {
    private eventDispatchers: EventDispatcher[] = [];
    
    rise(event: Event){
        //1. get the dispatcher for the evet name
        const eventDispatcher = this.eventDispatchers.find(ed => ed.eventName === event.name);
        //2. reurn false if not dispatcher, handle
        if(!eventDispatcher) return false;
        //3. dispatch the event
        eventDispatcher.dispatch(event);

    }


    //whystatic
    register(eventname: string, handler: EventHandler){
        const eventDispatcher = new EventDispatcher(eventname);
        return eventDispatcher.register(handler);

    }
    //funcion unregister
    unregister(eventname: string, handler: EventHandler){
        const eventDispatcher = this.eventDispatchers.find(ed => ed.eventName === eventname);
        if(!eventDispatcher) return false;
        return eventDispatcher.unregister(handler);
    }
}