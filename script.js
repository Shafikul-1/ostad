//Exercise 1: 

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [fastValue, secondVaalue] = arr;

    return { name, age };
}

const Exercise1 = destructureExample(obj, arr);
console.log(Exercise1);

//=============================================================

//Exercise 2: 

function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
const Exercise2 = sumNumbers(1, 2, 3, 4, 5);
console.log(Exercise2);

//=================================================================

//Exercise 3:

function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
}
const Exercise3 = createGreeting('Alice');
console.log(Exercise3);

//=================================================================

//Exercise 4: 

function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
const Exercise4 = isEven(7);
console.log(Exercise4);

//=================================================================

//Exercise 5: 

const multiply = (a, b) => a * b;
const Exercise5 = multiply(3, 4);
console.log(Exercise5);

//=================================================================

//Exercise 6: 

function getLargestNumber(a, b) {
    return a > b ? a : b;
}
const Exercise6 = getLargestNumber(10, 5);
console.log(Exercise6);

//=================================================================

//Exercise 7: 

function getAddressCity(address) {
    return address?.city ?? "Unknown";
}
const address = { street: '123 Main St', country: 'USA' };
const Exercise7 = getAddressCity(address);
console.log(Exercise7);

//=================================================================

//Exercise 8:

function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}
const Exercise8 = doubleNumbers([1, 2, 3, 4, 5]);
console.log(Exercise8);

//Exercise 9: 

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
const Exercise9 = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(Exercise9);

//=================================================================

//Exercise 10: 

function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
const Exercise10 = sumArray([1, 2, 3, 4, 5]);
console.log(Exercise10);

//=================================================================

//Exercise 11: 

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}
const Exercise11 = sortNumbers([5, 2, 8, 1, 4]);
console.log(Exercise11);
