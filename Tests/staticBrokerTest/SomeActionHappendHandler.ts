import { EventHandler } from "../../ApplicationLayer/EventHandler";
import { Event } from "../../ApplicationLayer/Event";
/**
 * Test Handler
 */
export class SomeActionHappened implements EventHandler {
    handle(event: Event): any {
        console.log(`${this.constructor.name}: Handler executed`);
    }
}