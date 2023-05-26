
const mensaje = "------ prueba cliente --------";

console.log(mensaje);

import { Customer } from "./objetos/Customer";
import { Address } from "./objetos/Adress";
import { CustomerRepository } from "./implementacion/CustomerRepositorio";
import { VacationPackageRepo } from "./implementacion/VacationPackageRepositorio";
import { ProposalRepository } from "./implementacion/ProposalRepositorio";
import { DateUtility } from "./objetos/utils/DateUtility"
import { Reservation } from "./objetos/Reservation/Reservation";
import { VacationPackage } from "./objetos/VacationPackage";
import { Proposal } from "./objetos/Proposal";
import { AirlineReservation } from "./objetos/Reservation/AirlineReservation";

const customerRepo = new CustomerRepository();

const address1 = new Address("123 Main St", "", "Kent", "OH", "92999", true);
const customer1 = new Customer(100,"Micahel", "peterson", "Wang", address1, "2135551212", "michael@wang.com");
customerRepo.add(customer1);

const address2 = new Address("456 Oak St", "Apt 2", "Akron", "OH", "44221", false);
const customer2 = new Customer(101,"Emily", "Johnson", "Smith", address2, "3305551212", "emily@smith.com");
customerRepo.add(customer2);

// Cliente 3
const address3 = new Address("789 5th Ave", "Suite 123", "New York", "NY", "10016", false);
const customer3 = new Customer(102,"John", "Doe", "", address3, "2125551212", "john@doe.com");
customerRepo.add(customer3);

// Cliente 4
const address4 = new Address("555 Broad St", "", "Boston", "MA", "02110", true);
const customer4 = new Customer(103,"Alice", "Lee", "Kim", address4, "6175551212", "alice@kim.com");
customerRepo.add(customer4);



//prueba de clase fecha 

const dateUtility = new DateUtility();
const formattedDate = dateUtility.formatDate(new Date());
console.log(formattedDate);


console.log(customer1.getEmail());
console.log(customerRepo.remove(100));
console.log(customerRepo.get(101)?.getEmail());
console.log("-------------------");
console.log(customerRepo.get(103)?.toString());
console.log();
//console.log(customerRepo.getAll());

console.log("----------------")

// const VacationPackage = new VacationPackage();
// const VacationPackageRepo = new VacationPackageRepo();



const VacationPackageRepository = new VacationPackageRepo();


// BAH3NIGHTHOTELAIR
const holders1: Reservation[] = [];
holders1.push(new Reservation('HOTEL', 'BestWestern', 'H1234'));
holders1.push(new Reservation("AIRLINE","United Airlines", "A4567"));


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

// FLKEYS5NIGHTHOTELAIRRENTAL
const holders2: Reservation[] = [];
holders2.push(new Reservation('HOTEL', 'Marriott Key West', 'H1999'));
holders2.push(new Reservation("AIRLINE","American Airlines", "A9122"));


const VacationPackage2 = new VacationPackage(
    101, 
    "FLKEYS5NIGHTHOTELAIRRENTAL",
    "5 Nights Stay in a 4 star Hotel. Rental car pickup at airport. Airfare covered.",
    5, 
    "HOTEL_AIR_CAR", 
    800.98, 
    "2021-1-31", 
    true, 
    false, 
    "florida", 
    holders2 
    );
VacationPackageRepository.add(VacationPackage2);

//console.log(VacationPackageRepository.getAll());
console.log("-------------")

const proposalRepo = new ProposalRepository();
const date = new DateUtility();
const pacakgeforproposal = VacationPackageRepository.get("BAH3NIGHTHOTELAIR")
//console.log(pacakgeforproposal)
const proposal1 = new Proposal(5000, 101, pacakgeforproposal, date.create(11,22,2023) );
proposal1.setupReservationDates(0,date.create(13,20,2023),date.create(13,20,2023));
proposal1.setupReservationDates(1,date.create(13,20,2023),date.create(13,20,2023));
proposalRepo.add(proposal1);
console.log('--------------')
console.log(proposalRepo.getAll());


const proposalbooking = proposalRepo.get(500);
//const booking1 = new Booking(6000, proposalbooking);

// FLOW TESTING
// =======================================================
// Customer calls in - Sales agent uses customer's phone number to pull customer information
//customerRepo.get()

// =======================================================
// Sales agent pull info for Vacation packages & susgests "3 Nights bahamas package"
const pacakgeforproposal2 = VacationPackageRepository.get("BAH3NIGHTHOTELAIR");
// ========================================================
// Customer likes the package so - Sales agent creates the proposal
const proposal2 = new Proposal(5002, 101, pacakgeforproposal2, date.createNow());



// Sales Agent sets the dates for Hotel - Check in Date = March 15, 2021 Checkout = March 17, 2021
proposal2.setupReservationDates(0,date.create(13,20,2023),date.create(13,20,2023));
// Sales agent sets up the flights
const airlineReservation: AirlineReservation = proposal2.getReservationIndex(1) as AirlineReservation;
// United flight UA431 from Newark/NJ airport at 8:30 AM
airlineReservation.setupOriginFlightInformation(
 date.createWithTime(13,20,2023,11,15),
 "EWR",
 "UA4231"
 );
console.log(proposal2);



