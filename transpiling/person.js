"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name + " ";
    };
    Person.prototype.printHello = function () {
        console.log(this.sayHello());
    };
    return Person;
}());
exports.Person = Person;
var person = new Person('tuna');
person.printHello();
