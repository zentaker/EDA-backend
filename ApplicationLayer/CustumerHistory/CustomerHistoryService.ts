import { Customer } from "../../DomainLayer/booking/entitys/Customer";
import { CustomerRepository } from "../../Tests/TestRepositorys/CustomerRepositorio";
import { ProposalRepository } from "../../Tests/TestRepositorys/ProposalRepositorio";
import { BookingRepository } from "../../Tests/TestRepositorys/bookingRepositorio";
import { CustomerHistoryResponse } from "./CustomerHistoryResponse";

export class CustomerHistoryService {

  
    constructor(
        private customerRepo: CustomerRepository, 
        private proposalRepo: ProposalRepository, 
        private bookingsRepo: BookingRepository) {

    }
  
    public getCustomerHistory(customerReference: number) {
      const customer = this.customerRepo.get(customerReference);
      if (!customer) return null;
  
      const proposals = this.proposalRepo.getCustomerProposals(customerReference);
      const bookingConfirmations = this.bookingsRepo.getByCustomer(customerReference);
  
      return new CustomerHistoryResponse(customer, proposals, bookingConfirmations);
    }
  
  
  
  }