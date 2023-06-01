export class paymentGatewayDetailresponse {
    constructor(
        private reference: string,
        private cardHolderLastname: string,
        private cardHolderFirstname: string,
        private transactionDate: Date,
        private transactionTyoe: string,//payment, Refound
        private amount: number 
    ){}

        //tecnicamnete aca se pudiese manejar la respuesta de los datos 
    //proporcionar metodos y propiedades para trabajar con los datos de la repsuesta
}