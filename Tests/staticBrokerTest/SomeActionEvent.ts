import { Event } from "../../ApplicationLayer/Event";
import { AggregateRoot } from "./AggregateRoot";
/**
 * This has dependency on AggregateRoot but not the other way round
 */
export class SomeAction extends Event {
    constructor( payload: any) {

        super(AggregateRoot.SOME_ACTION_EVENT, payload);
    }
}