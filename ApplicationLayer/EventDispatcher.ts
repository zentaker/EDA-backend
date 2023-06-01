import { EventHandler } from "./EventHandler";
/* 
Es el componente que se encarga de enviar los eventos a los respectivos manejadores(controlaldores) 
su funcion principal es recivir los eventos del EventBus y enviarlo a los Handlers(controladores)
que esten registrados al evento


*/
export class EventDispatcher {
    constructor(
        private eventName: string

    ){}
    private handlers: EventHandler[] = [];

    register(handler:EventHandler){
        //ver que el handler no esteb registrado todavia
        if(this.handlers.includes(handler)){
            return false
        }
        //agregar el chandler(controlador) a la collecion
        this.handlers.push(handler);
    }

}