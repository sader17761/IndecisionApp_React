'use strict';

// ARROW FUNCTIONS

//es5
function square(x) {
    return x * x;
};

console.log(square(8));

//es6 - always anonymous - must be assigned to a variable
// const squareArrow = (x) => {
//     return x * x;
// };

// OR it can be written this way

// expression syntax
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

// Challenge

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Wendy Sader'));

//arguments object -  no longer bound with arrow functions
var add = function add(a, b) {
    console.log(arguments); // no longer defined in arrow functions
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound 
var user = {
    name: 'Corey',
    cities: ['Mankato', 'Prior Lake', 'Hudson'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // this.name won't work in this function...but it will below with the arrow function
        // this.cities.forEach(function(city) {
        //     console.log(this.name + " has lived in " + city);
        // });

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });

        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        // return cityMessages;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// next Challenge 
var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return _this2.multiplyBy * num;
        });
    }
};

console.log(multiplier.multiply());
