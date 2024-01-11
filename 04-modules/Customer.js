"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer = void 0;
var customer = /** @class */ (function () {
    function customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(customer.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "_lasttName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "_lastName", {
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
exports.customer = customer;
