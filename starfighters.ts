import {Spacecraft, Containership, Smugglership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Smugglership {
    hiddenContainers: number
    constructor(propulsor: string, public cargoContainers: number = 4){
        super(propulsor)
        this.hiddenContainers = 1
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        } else {
            console.log("Failed")
        }
    }
}