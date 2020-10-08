var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var falcon = new Spacecraft('hyperdrive');
falcon.jumpIntoHyperspace();
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon(propulsor, cargoContainers) {
        if (cargoContainers === void 0) { cargoContainers = 4; }
        var _this = _super.call(this, propulsor) || this;
        _this.cargoContainers = cargoContainers;
        _this.hiddenContainers = 1;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("Failed");
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var mf = new MillenniumFalcon('hyperdrive');
mf.jumpIntoHyperspace();
function goodForTheJob(ship) {
    return ship.cargoContainers > 2;
}
function goodForSmuggle(ship) {
    return ship.hiddenContainers > 2;
}
console.log(goodForTheJob(mf));
console.log(goodForSmuggle(mf));
