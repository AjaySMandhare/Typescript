"use strict";
exports.__esModule = true;
exports.NewSimple = void 0;
var NewSimple = /** @class */ (function () {
    function NewSimple(name, salary, role) {
        this.name = name;
        this.Salary = salary;
        this.role = role;
    }
    NewSimple.prototype.display = function () {
        console.log("\n            ----------------------------------------------\n            Name is :: " + this.name + "\n            Salary is :: " + this.Salary + "\n            Role is :: " + this.role + " \n            ");
    };
    return NewSimple;
}());
exports.NewSimple = NewSimple;
