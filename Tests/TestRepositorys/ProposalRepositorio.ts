import { Proposal } from "../../DomainLayer/booking/entitys/Proposal"; 

export class ProposalRepository {
    private Proposals: Proposal[];
    constructor(){
        this.Proposals = [];
    }
    add(Proposal: Proposal): void {
        this.Proposals.push(Proposal);
    }
    get(reference: number): Proposal | null {
        //loop en la collecion
        for(const Proposal of this.Proposals){
            if(Proposal.getReference() === reference){
                return Proposal;
            }
        }
        return null
    }
    getAll(): Proposal[] {
        return this.Proposals;
    }
    getCustomerProposals(customerReference: number){
        const customerProposals: Proposal[] = [];

        for (const proposal of this.Proposals) {
            if (proposal.getCustomerReference() === customerReference) {
                customerProposals.push(proposal);
            }
        }

        return customerProposals;



    }
    remove(reference: number): boolean {
        //loop en la collecion
        for(const ProposalInCollection of this.Proposals){
            if(ProposalInCollection.getReference() === reference){
                this.Proposals.splice(this.Proposals.indexOf(ProposalInCollection),1);
                return true;
            }
        }
        return false
    }

}