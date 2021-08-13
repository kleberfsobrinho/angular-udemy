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

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourse() {
        return this.courses.slice();
    }
}

const student = new Student('Kleber', 'Sobrinho', 20, ['Angular']);
student.enrol('TypeScript');

// Interface

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let kleber: Human;

kleber = {
    firstName: 'Kleber',
    age: 20,
    greet() {
        console.log('Hello')
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello');
    };
}