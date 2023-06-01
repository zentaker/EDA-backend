import { Booking } from "../../DomainLayer/booking/Booking";
import { Customer } from "../../DomainLayer/booking/entitys/Customer";
import { Proposal } from "../../DomainLayer/booking/entitys/Proposal";

export class CustomerHistoryResponse{
    constructor(
        private customer: Customer,
        private Proposal: Proposal[]=[],
        private booking: Booking[]=[]
    ){}

    //tecnicamnete aca se pudiese manejar la respuesta de los datos 
    //proporcionar metodos y propiedades para trabajar con los datos de la repsuesta 
}