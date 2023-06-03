import { PaymentAudit } from "../../DomainLayer/PaymentAudit";
import { Event } from "../Event";

/**
 * Represents an event for "PaymentReceived"
 */
class PaymentReceived extends Event {
    static readonly EVENT_PAYMENT_RECEIVED = "PaymentReceived";

    constructor(paymentAudit: PaymentAudit) {
        super(PaymentReceived.EVENT_PAYMENT_RECEIVED, paymentAudit);
    }

    getPaymentAudit(): PaymentAudit {
        return this.payload as PaymentAudit;
    }
}