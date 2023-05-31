import { setupMessaging } from "./ApplicationLayer/SetUpMessaging";
import { BookingRepository } from "./TestImplementacion/bookingRepositorio";
import { ProposalRepository } from "./TestImplementacion/ProposalRepositorio";
import { DateUtility } from "./DomainLayer/utils/DateUtility";
import { Booking } from "./DomainLayer/booking/Booking";
import { Proposal } from "./DomainLayer/booking/entitys/Proposal";
import { VacationPackageRepo } from "./TestImplementacion/VacationPackageRepositorio";
import { AirlineReservation } from "./DomainLayer/booking/valueObjects/Reservation/AirlineReservation";
import { HotelReservation } from "./DomainLayer/booking/valueObjects/Reservation/HotelReservation";
import { Reservation } from "./DomainLayer/booking/valueObjects/Reservation/Reservation";
import { VacationPackage } from "./DomainLayer/booking/entitys/VacationPackage";



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
console.log(proposalbooking);
const booking1 = new Booking('PENDING_PAYMENT',6000, proposalbooking);
const bookingRepo = new BookingRepository();
bookingRepo.add(booking1);


// obtener referencia del repositorio de el booking 
const booking = bookingRepo.get(6000);
//CREAR





