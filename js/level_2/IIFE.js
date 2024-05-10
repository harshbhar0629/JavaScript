// Immediately invoked function expression

(function f() {
    console.log("hello harsh!");
})();

// this is another way to call function Immediately
//  semicolon must be needed o/w don't know where to stop

// memory phase
// execution phase


// handling null values
let a;
let b = a ?? 10; // here a is undefined so double question mark first check is this value exist or not means this value not be null or undefined
console.log(b)