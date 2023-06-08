import { EventHandler } from "./EventHandler";
import { EventDispatcher } from "./EventDispatcher";
import { Event } from "./Event";

/* encargado de recibir y distribuir los eventos en unn sistema, actua como intermediario entre los producers y consumers

el siguiente codigo asemeja rabitmq seguro?
como es con rabbit mq cual es la logica

*/
export class EventBus {

    //no se esta implementadno bien el event diaptcher
    static eventDispatchers: EventDispatcher[]=[];
    
   
     static raise(event: Event){
        //1. get the dispatcher for the evet name
        console.log('raising event:   '+ event.name);
        let eventDispatcher = this.eventDispatchers.find(ed => ed.eventName === event.name);
        console.log('event dispatcher:  '+ eventDispatcher);
        console.log('-----------------');

        //2. reurn false if not dispatcher, handle
        if(!eventDispatcher) return false;
        //3. dispatch the event
        EventDispatcher.dispatch(event);

    }


    //whystatic
    static register(eventname: string, handler: EventHandler){
        //1. get the dispatcher for the event name
        let eventDispatcher = this.eventDispatchers.find(ed => ed.eventName === eventname);
        //2.if event dispatcher not found create one
        if(!eventDispatcher){
            console.log('event dispatcher not found');
            console.log('creating event dispatcher');
            eventDispatcher = new EventDispatcher(eventname);
            this.eventDispatchers.push(eventDispatcher); 
        }

        console.log("registering event:  " + eventname);
        console.log('-------------');
        //1. register the handler to the event dispatcher
        EventDispatcher.register(handler);

    }
    //funcion unregister
  /*   static unregister(eventName: string, handler: EventHandler){
        const eventDispatcher = this.eventDispatchers.get(eventName);
        if(!eventDispatcher) return false;
        return eventDispatcher.unregister(handler);
    } */
}