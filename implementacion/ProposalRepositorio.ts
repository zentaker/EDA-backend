import { Proposal } from "../objetos/Proposal"; 

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