// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
let userName: string;
let isInstructor = true;

// More complex types

let hobbies: string[];

let tasks: any;

type Person = {
    name: string;
    age: number;
};

let person: Person;

let people: {
    name: string;
    age: number;
}[]; // array of objects

// Type inference - Union types

let course: string | number = "React - The Complete Guide";

course = 12341

// Functions & types

function add(a:number, b:number)/* :number */ {
    return a + b;
}

function printValue(value: any) {
    console.log(value);
}