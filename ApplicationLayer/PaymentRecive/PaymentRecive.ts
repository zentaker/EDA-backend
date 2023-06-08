import { PaymentAudit } from "../../DomainLayer/PaymentAudit";
import { Event } from "../Event";

/**
 * Represents an event for "PaymentReceived"
 */
export class PaymentReceived extends Event {
    static readonly EVENT_PAYMENT_RECEIVED: string = "EVENT_PAYMENT_RECEIVED";

    constructor(paymentAudit: PaymentAudit) {
        super(PaymentReceived.EVENT_PAYMENT_RECEIVED, paymentAudit);
    }

}