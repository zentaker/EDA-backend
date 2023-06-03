export class PaymentGatewayResponse {
    //como se le llama al uso de una clase externa para manejar la respuesta
    public reference: number;
    public result: string;
    public errodetails: string;

    constructor(
        reference: number, 
        result: string,
        errordetails: string 
    ){
        this.reference = reference;
        this.result = result;
        this.errodetails = errordetails;
    }
        //tecnicamnete aca se pudiese manejar la respuesta de los datos 
    //proporcionar metodos y propiedades para trabajar con los datos de la repsuesta

}