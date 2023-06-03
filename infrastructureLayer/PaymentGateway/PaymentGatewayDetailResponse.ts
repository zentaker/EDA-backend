export class paymentGatewayDetailresponse {
    reference: number;
    cardHolderLastname: string;
    cardHolderFirstname: string;
    transactionDate: Date;
    transactionTyoe: string;//payment, Refound
    amount: number;

    constructor(
        reference: number,
        cardHolderLastname: string,
        cardHolderFirstname: string,
        transactionDate: Date,
        transactionTyoe: string,//payment, Refound
        amount: number 
    ){
        this.reference = reference;
        this.cardHolderLastname = cardHolderLastname;
        this.cardHolderFirstname = cardHolderFirstname;
        this.transactionDate = transactionDate;
        this.transactionTyoe = transactionTyoe;
        this.amount = amount;
    }

        //tecnicamnete aca se pudiese manejar la respuesta de los datos 
    //proporcionar metodos y propiedades para trabajar con los datos de la repsuesta
}