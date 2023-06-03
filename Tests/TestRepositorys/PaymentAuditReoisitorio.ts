import { PaymentAudit} from "../../DomainLayer/PaymentAudit";



export class PaymentAuditRepository{
    private PaymentAudits: PaymentAudit[];
    constructor(){
        this.PaymentAudits = [];
    }
    add(PaymentAudit: PaymentAudit): void
{
    this.PaymentAudits.push(PaymentAudit);
}

    
  
}