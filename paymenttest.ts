
import { BookingRepository } from "./Tests/TestRepositorys/bookingRepositorio";
import { ProposalRepository } from "./Tests/TestRepositorys/ProposalRepositorio";
import { DateUtility } from "./DomainLayer/utils/DateUtility";
import { Booking } from "./DomainLayer/booking/Booking";
import { Proposal } from "./DomainLayer/booking/entitys/Proposal";
import { VacationPackageRepo } from "./Tests/TestRepositorys/VacationPackageRepositorio";
import { AirlineReservation } from "./DomainLayer/booking/valueObjects/Reservation/AirlineReservation";
import { HotelReservation } from "./DomainLayer/booking/valueObjects/Reservation/HotelReservation";
import { Reservation } from "./DomainLayer/booking/valueObjects/Reservation/Reservation";
import { VacationPackage } from "./DomainLayer/booking/entitys/VacationPackage";
import { PaymentRecive } from "./ApplicationLayer/PaymentRecive/PaymentreciveHandler";
import { EventBus } from "./ApplicationLayer/EventBus";
import { PaymentGatewayService } from "./infrastructureLayer/PaymentGateway/PaymentGatewayService";
import { PaymentAuditRepository } from "./Tests/TestRepositorys/PaymentAuditRepositorio";
import { PaymentAudit } from "./DomainLayer/PaymentAudit";
import { PubSubService } from "./infrastructureLayer/rabbitmq/PubSubService";
import { MessagingService } from "./ApplicationLayer/Messaging/MessagingService";


const VacationPackageRepository = new VacationPackageRepo();


// BAH3NIGHTHOTELAIR
const holders1: Reservation[] = [];
holders1.push(new HotelReservation('BestWestern', 'H1234'));
holders1.push(new AirlineReservation("United Airlines", "A4567"));


const VacationPackage1 = new VacationPackage(
    100, 
    "BAH3NIGHTHOTELAIR",
    "3 Nights Stay in a 3 star Hotel. Door to door shuttle included. Airfare covered.",
    3, 
    "HOTEL_AIR", 
    547.98, 
    "2021-1-31", 
    true, 
    false, 
    "bahamas", 
    holders1 
    );

VacationPackageRepository.add(VacationPackage1);

const proposalRepo = new ProposalRepository();
const date = new DateUtility();
const pacakgeforproposal = VacationPackageRepository.get("BAH3NIGHTHOTELAIR")
//console.log(pacakgeforproposal)
const proposal1 = new Proposal(5000, 101, pacakgeforproposal, date.create(11,22,2023) );
proposal1.setupReservationDates(0,date.create(13,20,2023),date.create(13,20,2023));
proposal1.setupReservationDates(1,date.create(13,20,2023),date.create(13,20,2023));
proposalRepo.add(proposal1);
console.log('--------------')
//console.log(proposalRepo.getAll());


const proposalbooking = proposalRepo.get(5000);
//console.log(proposalbooking);
const booking1 = new Booking('PENDING_PAYMENT',6000, proposalbooking);
const bookingRepo = new BookingRepository();
bookingRepo.add(booking1);
(global as any).bookingRepo = bookingRepo;

//iniciamos el servicio de mensajeria

//1. crear la instancia dl messagin service 
const url = 'amqps://kcutczsz:kesNHxIyaLWTJz5SJN82HG5wiswraCgZ@prawn.rmq.cloudamqp.com/kcutczsz'
const queueName = 'email.notification'
console.log('instanciando el servicio');

export const service = new MessagingService(url, queueName);
console.log(service.channelStatus());
service.start().then(() => {
    
    console.log(service.channelStatus());

    if(service.channelStatus()=== true){
        console.log('intentando publicar');
        service.publish('prueba');
        service.stop();

    }else{ console.log('error al publicar');}
})


//set the messagin service on the booking respositorui
//bookingRepo.setupMessaginService();

/* //1. Obtenermos la referencia al booking
const bookingConfirmation = bookingRepo.get(6000);
//bookingConfirmation!.setupMessaginService();

//2. creamos una instancia del handler(manejador) y registramos en handler 
const handler = new PaymentRecive();
EventBus.register('EVENT_PAYMENT_RECEIVED', handler)

//3. registramos handlers(controladores) adicionales - opcional


//4. crear la intancia fake de la pasarella de pago
const paymentGateway = new PaymentGatewayService();

//5. crear la instancia del respositorio de la auditoria
const paymentAuditRepo = new PaymentAuditRepository();

//6. procesamos el pago
console.log('Procesando el pago');
const paymentAudit = new PaymentAudit(bookingConfirmation!.getReference(),'CHARGE' );

//procesamos el pago
paymentAudit.processPayment(4557353673638473, 5,2030, 91620, 1093.23, 'wang', 'michael'); */

