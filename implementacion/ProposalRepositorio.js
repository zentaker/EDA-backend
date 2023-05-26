"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalRepository = void 0;
class ProposalRepository {
    constructor() {
        this.Proposals = [];
    }
    add(Proposal) {
        this.Proposals.push(Proposal);
    }
    get(reference) {
        //loop en la collecion
        for (const Proposal of this.Proposals) {
            if (Proposal.getReference() === reference) {
                return Proposal;
            }
        }
        return null;
    }
    getAll() {
        return this.Proposals;
    }
    remove(reference) {
        //loop en la collecion
        for (const ProposalInCollection of this.Proposals) {
            if (ProposalInCollection.getReference() === reference) {
                this.Proposals.splice(this.Proposals.indexOf(ProposalInCollection), 1);
                return true;
            }
        }
        return false;
    }
}
exports.ProposalRepository = ProposalRepository;
