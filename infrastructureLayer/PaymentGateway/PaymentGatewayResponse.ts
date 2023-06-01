export class PaymentGatewayResponse {
    //como se le llama al uso de una clase externa para manejar la respuesta
    constructor(
        private reference: string,
        private result: string,
        private errordetails: string | null
    ){}
        //tecnicamnete aca se pudiese manejar la respuesta de los datos 
    //proporcionar metodos y propiedades para trabajar con los datos de la repsuesta

}