import { VacationPackage } from "../../DomainLayer/booking/entitys/VacationPackage";

export class VacationPackageRepo {
    private VacationPackages: VacationPackage[];
    constructor(){
        this.VacationPackages = [];
    }
    add(VacationPackage: VacationPackage): void {
        this.VacationPackages.push(VacationPackage);
    }
    getid(reference: number): VacationPackage | null {
        //loop en la collecion
        for(const VacationPackage of this.VacationPackages){
            if(VacationPackage.getReference() === reference){
                return VacationPackage;
            }
        }
        return null
    }
    get(name: string){
            //loop en la collecion
            for(const VacationPackage of this.VacationPackages){
                if(VacationPackage.getName() === name){
                    return VacationPackage;
                }
            }
            return null


    }

    getAll(): VacationPackage[] {
        return this.VacationPackages;
    }
    remove(reference: number): boolean {
        //loop en la collecion
        for(const VacationPackageInCollection of this.VacationPackages){
            if(VacationPackageInCollection.getReference() === reference){
                this.VacationPackages.splice(this.VacationPackages.indexOf(VacationPackageInCollection),1);
                return true;
            }
        }
        return false
    }

}