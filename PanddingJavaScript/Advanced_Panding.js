"use strict";
exports.__esModule = true;
exports.Taazaa = void 0;
var Taazaa = /** @class */ (function () {
    function Taazaa(tax) {
        console.log(tax);
        this.t = tax;
    }
    Taazaa.prototype.GetTax = function () {
        return this.t;
    };
    return Taazaa;
}());
exports.Taazaa = Taazaa;
