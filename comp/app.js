"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var falcon = new base_ships_1.Spacecraft('hyperdrive');
falcon.jumpIntoHyperspace();
var mf = new starfighters_1.MillenniumFalcon('hyperdrive');
mf.jumpIntoHyperspace();
function goodForTheJob(ship) {
    return ship.cargoContainers > 2;
}
function goodForSmuggle(ship) {
    return ship.hiddenContainers > 2;
}
console.log(goodForTheJob(mf));
console.log(goodForSmuggle(mf));
