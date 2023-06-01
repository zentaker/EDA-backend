import { EventHandler } from "../EventHandler"

export class PaymentRecive implements EventHandler{ // handler
    public handle(event: Event) {
        console.log('handlerexecuted')
    }
}``