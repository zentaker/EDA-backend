// pattern: Entity
// los requisitos normativos exigen que todos los registors de pagos se mantengan durante 7 anios, este objeto representa el registro de pagonde cliente 
//5:40 inicio

import { EventBus } from "../ApplicationLayer/EventBus";
import { PaymentRecive } from "../ApplicationLayer/PaymentRecive/PaymentreciveHandler";
import { PaymentAuditRepository } from "../Tests/TestRepositorys/PaymentAuditRepositorio";
import { PaymentGatewayService } from "../infrastructureLayer/PaymentGateway/PaymentGatewayService";

export class PaymentAudit{
    private reference: number; // referencia de auditoria para el pago
    private vendorReference: string | null; // referencia devuelta por el provedor de pago
    private bookingReference: number;//referencia el booking para el cual es el pago
    private transactionType: string;
    private transactionDate?: Date;
    private creditCardNumber?: number;
    private expiryMonth?: number;
    private expiryYear?: number;
    private zipCode?: number;
    private paymentAuditRepository?: PaymentAuditRepository[];
    private cardHolderLastName?: string;
    private cardHolderFirstName?: string

    constructor(
        //reference: number, // referencia de auditoria para el pago
        bookingReference: number,//referencia el booking para el cual es el pago
        transactionType: string

    ){
        this.reference = 0; //indica que es una nueva instancia 
        this.vendorReference = null;
        this.bookingReference = bookingReference;
        this.transactionType = transactionType;
    }
    isAlreadyProcessed(){
        return (this.reference != 0);
    }

    processPayment(creditCardNumber: number,
        expiryMonth: number,
        expiryYear: number,
        zipCode: number,
        amount: number,
        cardHolderLastName: string,
        cardHolderFirstName: string,
        ){
        if(this.isAlreadyProcessed()){
            return -1;
        }
        //guarda la informacion de la tarjeta de credito
        this.cardHolderFirstName = cardHolderFirstName;
        this.cardHolderLastName = cardHolderLastName;
        this.creditCardNumber = creditCardNumber;
        this.expiryYear = expiryYear;
        this.expiryMonth = expiryMonth;
        this.zipCode = zipCode;

        //llama al servicio de pago
        const garewayTxn = new PaymentGatewayService(); 
        garewayTxn.processPayment(creditCardNumber, expiryMonth, expiryYear, zipCode, amount);

   
        //obtenr los detalles de la transaccion
        //problemas en manejar la respuesta del paymentgatewayresponse
        const txtdetails = garewayTxn.getTransactionsDetails(garewayTxn.reference);

        //guardarlos en el agregado
        this.reference = txtdetails.reference;
        this.transactionType = txtdetails.transactionTyoe;
        this.transactionDate = txtdetails.transactionDate;

        //el agregado se guarda asi mismo
        //this.reference = paymentAuditRepository.add(this);
        if(this.reference > 0){
            
            //raise the event
            const event = new PaymentRecive(this)
            EventBus.raise(event);

            return this.reference;


        }
        



        


    }
}