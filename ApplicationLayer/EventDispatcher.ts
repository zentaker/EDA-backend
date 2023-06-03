import { EventHandler } from "./EventHandler";
import { Event } from "./Event";
/* 
Es el componente que se encarga de enviar los eventos a los respectivos manejadores(controlaldores) 
su funcion principal es recivir los eventos del EventBus y enviarlo a los Handlers(controladores)
que esten registrados al evento


*/
export class EventDispatcher {
    private handlers: EventHandler[] = [];
    public eventName: string;
    
    constructor(
        eventName: string

    ){
        this.eventName = eventName; 
    }
    

    register(handler:EventHandler){
        //ver que el handler no esteb registrado todavia
        if(this.handlers.includes(handler)){
            return false
        }
        //agregar el chandler(controlador) a la collecion
        this.handlers.push(handler);
    }
    //funcion desregistrar
    unregister(handler: EventHandler){
        //ver que el handler no este registrado
        if(!this.handlers.includes(handler)){
            return false;
        }
        //remover el handler de la collecion
        this.handlers = this.handlers.filter(h => h !== handler);
        return true;
    }
    dispatch(event: Event){
        //1.checks if handler exists
        if(!this.handlers.length) return false;
        //2. loop throught the handlers ando invoke handle funciot
        this.handlers.forEach(handler => handler.handle(event));
        //3. return to indicate actiuon was susesfull
        return true;
    }


}