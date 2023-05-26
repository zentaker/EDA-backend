"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacationPackageRepo = void 0;
class VacationPackageRepo {
    constructor() {
        this.VacationPackages = [];
    }
    add(VacationPackage) {
        this.VacationPackages.push(VacationPackage);
    }
    getid(reference) {
        //loop en la collecion
        for (const VacationPackage of this.VacationPackages) {
            if (VacationPackage.getReference() === reference) {
                return VacationPackage;
            }
        }
        return null;
    }
    get(name) {
        //loop en la collecion
        for (const VacationPackage of this.VacationPackages) {
            if (VacationPackage.getName() === name) {
                return VacationPackage;
            }
        }
        return null;
    }
    getAll() {
        return this.VacationPackages;
    }
    remove(reference) {
        //loop en la collecion
        for (const VacationPackageInCollection of this.VacationPackages) {
            if (VacationPackageInCollection.getReference() === reference) {
                this.VacationPackages.splice(this.VacationPackages.indexOf(VacationPackageInCollection), 1);
                return true;
            }
        }
        return false;
    }
}
exports.VacationPackageRepo = VacationPackageRepo;
