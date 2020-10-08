interface Containership{
    cargoContainers: number
}

interface Smugglership extends Containership{
    hiddenContainers: number
}

class Spacecraft{

    constructor(public propulsor: string){}
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let falcon = new Spacecraft('hyperdrive')

falcon.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Smugglership {
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

