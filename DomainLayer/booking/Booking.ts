import { Proposal } from "./Proposal";


//Strategic Pattern: Aggregate
export class Booking {
    
    private reference: number;
    private proposalreference?: number;
    private custumerReference?: number;
    constructor(
        private status: 'PENDING_PAYMENT'|'PENDING_RESERVATION'|' RESERVATION_IN_PROGRESS' | 'CONFIRMED'| 'CANCELLATION_IN_PROGRESS'| 'CANCELLED'|'UNKNOWN', 
        reference: number , 
        proposal: Proposal |null
        ){
        this.reference = reference;
        this.proposalreference = proposal?.getReference();
        this.custumerReference = proposal?.getCustomerReference();

    }
    getReference(){
        return this.reference;
    }
    setupMessaginService(){
        
    }
}