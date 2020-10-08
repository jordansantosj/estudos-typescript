import {Spacecraft, Containership, Smugglership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

let falcon = new Spacecraft('hyperdrive')
falcon.jumpIntoHyperspace()

let mf = new MillenniumFalcon('hyperdrive')
mf.jumpIntoHyperspace()

function goodForTheJob(ship: Containership): boolean{
    return ship.cargoContainers > 2
}

function goodForSmuggle(ship: Smugglership){
    return ship.hiddenContainers > 2

}

console.log(goodForTheJob(mf))
console.log(goodForSmuggle(mf))

