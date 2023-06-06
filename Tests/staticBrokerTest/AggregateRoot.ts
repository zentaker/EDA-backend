import { EventBus } from "../../ApplicationLayer/EventBus";
import { SomeAction } from "./SomeActionEvent";
/**
 * Class that represents an Aggregate Root
 */
export class AggregateRoot {
    // Assume there are attributes
    // Assume there is a reference to a repository

    public static readonly SOME_ACTION_EVENT: string = "SOME_ACTION_EVENT";

    /**
     * Represents a business action that led to a change in the state of the aggregate
     * This throws an event
     */
    public someAction(): void {
        // Logic that carries out the process steps
        // Change in state happens successfully

        console.log(`${this.constructor.name}: Carried out the action Successfully.`);
        // create te instance of evenbus
        //ver que el event bus no este instanciado;
        // Now raise the event


        
        //parece que con static ya se implemento el patron singleton
        EventBus.raise(new SomeAction("This is the payload"));
    }
}