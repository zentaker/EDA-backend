import { paymentGatewayDetailresponse } from "./PaymentGatewayDetailResponse";
import { PaymentGatewayResponse } from "./PaymentGatewayResponse";

//pattern: infraestructure service
export class PaymentGatewayService {
    reference!: number;
    

    processPayment(creditcardNumber: number, expiryMonth: number, expiryYear: number, zipCode: number,amount:number){
        // This is where the code can be put in for interacting with a 3rd party service


        // Transform the response from the external service to an instance of type PaymentGatewayTransaction
        return new PaymentGatewayResponse(1234532, 'ok', 'null');
    }

    processRefound(reference: string){
        // This is where the code can be put in for interacting with a 3rd party service

        // Transform the response from the external service to an instance of type PaymentGatewayTransaction
        return new PaymentGatewayResponse(23422332,'charge','null');
    }
    getTransactionsDetails(transactionreference: number){
        // Details may be retrieved from the external service

        // Transform the service to create the instance of PaymentGatewayTransactionDetails
        return new paymentGatewayDetailresponse(23237183,'jhon','doe', new Date(), 'Charge', 9843);
    }
 


}