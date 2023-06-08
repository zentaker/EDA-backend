import { Proposal } from "./entitys/Proposal";
import { messagingService } from '../../ApplicationLayer/Messaging/MessagingService'


//Strategic Pattern: Aggregate
export class Booking {
    
    private reference: number;
    private proposalreference?: number;
    private custumerReference?: number;
    constructor(
        private status: 'PENDING_PAYMENT'|'PENDING_RESERVATION'|'RESERVATION_IN_PROGRESS' | 'CONFIRMED'| 'CANCELLATION_IN_PROGRESS'| 'CANCELLED'|'UNKNOWN', 
        reference: number , 
        proposal: Proposal |null
        ){
        this.reference = reference;
        this.proposalreference = proposal?.getReference();
        this.custumerReference = proposal?.getCustomerReference();
        //this.setupMessaginService();

    }
    getReference(){
        return this.reference;
    }
    getCustomerReference(){
        return this.custumerReference;

    }
    setupMessaginService(){
        const messageservice = new messagingService();
        console.log(this);
        messageservice.subscribe(this);
        
    }
    //crear setpaymentconfiomation reference 
    setPaymentConfirmation(){
        this.status = 'PENDING_RESERVATION';
    }
    reserve(){
        this.status = 'RESERVATION_IN_PROGRESS';
        //logica para llamar a los proveedores de las reservaciones para inciial el proceso
    }

    
}