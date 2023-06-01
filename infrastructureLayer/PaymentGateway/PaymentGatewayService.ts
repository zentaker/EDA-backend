import { paymentGatewayDetailresponse } from "./PaymentGatewayDetailResponse";
import { PaymentGatewayResponse } from "./PaymentGatewayResponse";

export class PaymentGatewayService {

    processPayment(creditcardNumber: number, expiryMonth: number, expiryYear: number, zipCode: number,amount:number){
        // This is where the code can be put in for interacting with a 3rd party service

        // Transform the response from the external service to an instance of type PaymentGatewayTransaction
        return new PaymentGatewayResponse('1234234', 'ok', null);
    }

    processRefound(reference: string){
        // This is where the code can be put in for interacting with a 3rd party service

        // Transform the response from the external service to an instance of type PaymentGatewayTransaction
        return new PaymentGatewayResponse('0029323','ok',null);
    }
    getTransactionsDetails(transactionreference: string){
        // Details may be retrieved from the external service

        // Transform the service to create the instance of PaymentGatewayTransactionDetails
        return new paymentGatewayDetailresponse('23237183','jhon','doe', new Date(), 'Charge', 9843);
    }



}