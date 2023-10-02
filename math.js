// using Math.floor()

var num = Math.floor(1.8645);
console.log(num); // 1

var num = Math.floor(-0.456);
console.log(num); // -1

var num = Math.floor("4");
console.log(num); // 4

// Returns 0 for null
var num = Math.floor(null);
console.log(num); // 0

// Returns NaN for non-numeric types
var num = Math.floor("JavaScript");
console.log(num); // NaN

var num = Math.floor(NaN);
console.log(num); // NaN
