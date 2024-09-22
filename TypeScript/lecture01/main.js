"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'hello world war';
console.log(message);
var isNew = true;
var total = 0;
var name = 'sakib';
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple (can contain element as decalared, not more or less)
var person1 = ['chris', 22];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); // by default index started at 0 but we can set starting index i.e Red = 5 
//any
var randomValue = 10;
//multitype (union type)
var mymultitypevariable;
mymultitypevariable = 20;
mymultitypevariable = true;
//function---
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5));
function hello() {
    console.log('hello');
}
hello();
//passing object as parameter
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'MD',
    lastName: 'Sakib'
};
fullName(p);
function carDeails(car) {
    console.log("".concat(car.model, " model in ").concat(car.color, " color is available in ").concat(car.price, " BDT"));
}
var vehicle = {
    model: 2023,
    color: 'green',
};
carDeails(vehicle);
//class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("hey ".concat(this.employeeName, " good morning"));
    };
    return Employee;
}());
var employee1 = new Employee('sakib');
employee1.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this; //to call parent class constructor
    }
    Manager.prototype.work = function () {
        console.log("manager is working");
    };
    return Manager;
}(Employee));
var mng1 = new Manager('saad');
console.log(mng1.employeeName);
mng1.work();
mng1.greet();
//access modifier (public, private, protected)
