// 25 Variables 
let age: number = 25;
let pi: number = 3.14;
let isStudent: boolean = true;
let username: string = "Annisya";
let notDefined: undefined = undefined;
let nothingHere: null = null;
let bigNumber: bigint = 9007199254740991n;
let uniqueID: symbol = Symbol("id");
let isCompleted: boolean = false;
let firstName: string = "Dwi";
let lastName: string = "Chaerani";
let temperature: number = 30.5;
let decimal: number = 12.99;
let maxSafeInteger: number = Number.MAX_SAFE_INTEGER;
let nanValue: number = NaN;
let someString: string = "Hello World";
let someBigint: bigint = 123456789123456789n;
let someSymbol: symbol = Symbol("unique");
let someBool: boolean = false;
let hexValue: number = 0xfff;
let binaryValue: number = 0b1010;
let octalValue: number = 0o755;
let anotherString: string = "Typescript";
let anotherBool: boolean = true;
let anotherUndefined: undefined = undefined;


function addition(a: number, b: number): number {
    return a + b;
}

function subtraction(a: number, b: number): number {
    return a - b;
}

function multiplication(a: number, b: number): number {
    return a * b;
}

function division(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}


console.log(addition(5, 10));         
console.log(subtraction(10, 5));      
console.log(multiplication(4, 6));    
console.log(division(20, 5));         
