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

export {Containership, Smugglership, Spacecraft}