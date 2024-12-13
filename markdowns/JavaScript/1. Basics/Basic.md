# 1. JavaScript Basics

<br>

## What is JavaScript?

<br>
- A high-level, interpreted programming language.
- Runs in the browser (client-side) and can also be used on the server with Node.js.
- Conforms to the <span id="tag">ECMAScript</span> specification.
- Multi-paradigm: supports object-oriented and functional programming styles.
- Can be used for both front-end and back-end development.

<br>

## Why Learn JavaScript?

<br>
- It's essential for client-side programming (interactivity in web pages).
- Popular frameworks: <span id="tag">React</span>, <span id="tag">Angular</span>, <span id="tag">Vue.js</span>.
- Can be used for full-stack development with <span id="tag">Node.js</span> and mobile apps with <span id="tag">React Native</span>.

<br>

## Prerequisites

<br>

Before diving in, you should have:
<br>
<br>

- **Basic HTML and CSS Knowledge:** Understanding <span id="tag">HTML</span> and <span id="tag">CSS</span> will help you integrate JavaScript effectively into a webpage.
- **Text Editor:** Any code editor, such as <span id="tag">VS Code</span> or Sublime Text.
- **Web Browser:** A browser like <span id="tag">Chrome</span> or <span id="tag">Firefox</span> to test your JavaScript code.

<br>

## Overview

<br>

Covers basic syntax, data types, variables, arrays, objects, loops, conditionals, functions, and DOM manipulation.

<br>

## JavaScript Basics

<br>

### 1. Setting Up:

<br>
- Use a text editor (e.g., Visual Studio Code) and live server extension for real-time updates.
- Include JavaScript in HTML using <span id="tag">&lt;script&gt;</span> tags.

<br>

```html:@/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Basic Example</title>
  </head>
  <body>
    <h1>JavaScript Document Example</h1>
    <p id="demo">Click the button to see a message.</p>
    <button onclick="displayMessage()">Click Me</button>

    <!-- Link to JavaScript File -->
    <script src="script.js"></script>
  </body>
</html>
```

<br>

### 2. Console vs. Alert:

<br>

- <span id="tag">Console</span>: displays messages in the browser's console.
- <span id="tag">Alert</span>: displays a message in a popup box.
- Use console for debugging and testing.
- Use alert for displaying messages to the user.

<br>

```js:@/script.js
// JavaScript Document - script.js

// Console:
console.log("Hello, JavaScript!"); // -> Hello, JavaScript!

// Alert:
alert("Hello, JavaScript!"); // allert -> Hello, JavaScript!

```

<br>

### 3. Variables:

<br>

- Variables are used to store data.
- They are declared using the <span id="tag">var</span>, <span id="tag">let</span>, or <span id="tag">const</span> keyword.
- Use <span id="tag">let</span>, <span id="tag">const</span>, and avoid <span id="tag">var</span>.
- <span id="tag">let</span> is block-scoped; <span id="tag">const</span> is for constants.
- Variables are case-sensitive.

<br>

```js:@/script.js
// JavaScript Document - script.js

let myVariable = "Hello, JavaScript!";
const myConstant = "Hello, JavaScript!";

console.log(myVariable); // -> Hello, JavaScript!
console.log(myConstant); // -> Hello, JavaScript!

myVariable = "Goodbye, JavaScript!";
console.log(myVariable); // -> Goodbye, JavaScript!

myConstant = "Goodbye, JavaScript!";
console.log(myConstant); // -> Goodbye, JavaScript!
```

<br>

### 4. Data Types:

<br>
- Primitive types: <span id="tag">String</span>, <span id="tag">Number</span>, <span id="tag">Boolean</span>, <span id="tag">Null</span>, <span id="tag">Undefined</span>.
- Object types: <span id="tag">Array</span>, <span id="tag">Object</span>.
- Use typeof to check data types.

<br>

```js:@/script.js
// JavaScript Document - script.js

let myVariable = "Hello, JavaScript!";
const myConstant = "Hello, JavaScript!";

console.log(typeof myVariable); // string
console.log(typeof myConstant); // string

console.log(typeof 123); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object - null
console.log(typeof undefined); // undefined
```

<br>

### 5. Strings:

<br>
- <span id="tag">Strings</span> are sequences of characters.
- Use double quotes for strings.
- Use single quotes for strings containing single quotes.
- Use backticks for strings containing backticks.
- Concatenation using + or template literals (backticks).
- String methods: <span id="tag">.length</span>, <span id="tag">.toUpperCase()</span>, <span id="tag">.substring()</span>, <span id="tag">.split()</span>.

<br>

```js:@/script.js
// JavaScript Document - script.js

let myString = "Hello, JavaScript!";

console.log(myString.length); // length of string
console.log(myString.toUpperCase()); // converts to uppercase -> HELLO, JAVASCRIPT!
console.log(myString.substring(0, 5)); // substring from index 0 to index 5 - Hello
console.log(myString.split(" ")); // splits on spaces - splits on individual words -> [ 'Hello,', 'JavaScript!' ]
console.log(myString.split("")); // splits on empty strings - splits on individual characters -> ['H', 'e', 'l', 'l', 'o', ',', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', '!']
console.log(myString.split(",")); // splits on commas -> [ 'Hello', ' JavaScript!' ]
```

<br>

### 6. Arrays:

<br>
- <span id="tag">Arrays</span> are ordered lists of values.
- Use square brackets <span id="tag">[]</span> to define an array.
- Methods: <span id="tag">.push()</span>, <span id="tag">.pop()</span>, <span id="tag">.shift()</span>, <span id="tag">.unshift()</span>, <span id="tag">.forEach()</span>, <span id="tag">.map()</span>, <span id="tag">.filter()</span>.

<br>

```js:@/script.js
// JavaScript Document - script.js

let myArray = ["apple", "banana", "cherry"];

console.log(myArray.length); // length of array -> 3
console.log(myArray[0]); // -> apple
console.log(myArray[1]); // -> banana
console.log(myArray[2]); // -> cherry

console.log(myArray.indexOf("banana")); // shows index of "banana" -> 1

myArray.push("durian"); // adds at last

console.log(myArray); // -> [ 'apple', 'banana', 'cherry', 'durian' ]

myArray.pop(); // removes last element

console.log(myArray); // -> [ 'apple', 'banana', 'cherry' ]

myArray.shift(); // removes first element

console.log(myArray); // -> [ 'banana', 'cherry' ]

myArray.unshift("fig"); // adds at first

console.log(myArray); // -> [ 'fig', 'banana', 'cherry' ]

myArray.forEach(function (element) {
    console.log(element); // prints each element
});

myArray.map(function (element) {
    return element + "-mapped"; // returns each element with "-mapped" added
});

myArray.filter(function (element) {
    return element.includes("e"); // returns only elements that include "e"
});
```

<br>

### 7. Objects:

<br>
- Objects are collections of key-value pairs.
- Use curly braces <span id="tag">{}</span> to define an object.
- Key-value pairs.
- Access properties using dot notation or bracket notation.
- Methods: <span id="tag">.keys()</span>, <span id="tag">.values()</span>, <span id="tag">.entries()</span>, <span id="tag">.forEach()</span>, <span id="tag">.map()</span>, <span id="tag">.filter()</span>.
- Object methods and this keyword.

<br>

#### 1. values, keys, entries

<br>

```js:@/script.js
// JavaScript Document - script.js

// OBJECT LITERALS

const person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["music", "movies", "sports"],
};

// Get single value
console.log(person.name); // -> John
console.log(person.age); // -> 30
console.log(person.city); // -> New York

console.log(Object.keys(person)); // returns array of keys -> [ 'name', 'age', 'city' ]
console.log(Object.values(person)); // returns array of values -> [ 'John', 30, 'New York' ]
console.log(Object.entries(person)); // returns array of key-value pairs -> [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// Get array value
console.log(person.hobbies[1]); // -> movies

// Add property
person.email = "jdoe@gmail.com";

console.log(person); // -> { name: 'John', age: 30, city: 'New York', hobbies: [ 'music', 'movies', 'sports' ], email: 'jdoe@gmail.com' }
```

<br>

#### 2. object value, JSON, for loops, while loops, array methods

<br>

```js:@/script.js
// Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Dinner with wife",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    isCompleted: true,
  },
];

// Get specific object value
console.log(todos[1].text); // -> Dinner with wife

// Format as JSON
console.log(JSON.stringify(todos)); // -> [{"id":1,"text":"Take out trash","isComplete":false},{"id":2,"text":"Dinner with wife","isComplete":false},{"id":3,"text":"Meeting with boss","isComplete":true}]

// LOOPS

// For
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`); // -> For Loop Number: 0 , For Loop Number: 1, For Loop Number: 2, ..., For Loop Number: 10
}

// While
let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`); // -> While Loop Number: 0 , While Loop Number: 1, While Loop Number: 2, ..., While Loop Number: 10
  i++;
}

// Loop Through Arrays
// For Loop
for (let i = 0; i < todos.length; i++) {
  console.log(` Todo ${i + 1}: ${todos[i].text}`); // -> Todo 1: Take out trash, Todo 2: Dinner with wife, Todo 3: Meeting with boss
}

// For...of Loop
for (let todo of todos) {
  console.log(todo.text); // -> Take out trash, Dinner with wife, Meeting with boss
}

// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`); // -> 1: Take out trash, 2: Dinner with wife, 3: Meeting with boss
  console.log(myTodos); // -> [ { id: 1, text: 'Take out trash', isComplete: false }, { id: 2, text: 'Dinner with wife', isComplete: false }, { id: 3, text: 'Meeting with boss', isComplete: true } ]
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function (todo) {
  return todo.text;
});

console.log(todoTextArray); // -> [ 'Take out trash', 'Dinner with wife', 'Meeting with boss' ]

// filter() - Returns array based on condition
const todoId = todos.filter(function (todo) {
  // Return only todos where id is 1
  return todo.id === 1;
});

console.log(todoId); // -> [ { id: 1, text: 'Take out trash', isComplete: false } ]

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted); // -> [ { id: 3, text: 'Meeting with boss', isComplete: true } ]

// filer() with map()

const todoNotCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === false;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoNotCompleted); // -> [ 'Take out trash', 'Dinner with wife' ]
```

<br>

## Control Structures

<br>

### 1. Conditionals:

<br>
- if, else if, else, and switch statements.
- Ternary operator for shorthand conditions.
<br>
<br>

```js:@/script.js
// CONDITIONALS

// Simple If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}

// logs -> x is greater than 10

// Switch
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:
    console.log('color is not red or blue')
}

// logs -> color is blue

// Ternary operator / Shorthand if
const z = color === 'red' ? 10 : 20;

console.log(z); // -> 20

```

<br>

## Functions

<br>
- Function declaration vs. expression.
- Arrow functions for cleaner syntax.
- Default parameters and returning values.

<br>

```js:@/script.js
// FUNCTIONS
function greet(greeting = "Hello", name) {
   if (!name) {
    console.log(greeting); // logs -> "Hello"
    return greeting;
  } else {
    console.log(`${greeting} ${name}`); // logs -> "Hello John"
    return `${greeting} ${name}`;
  }
}
greet(); // returns -> Hello
greet("Hello", "John"); // returns -> Hello John


// ARROW FUNCTIONS
const greet = (greeting = "Hello", name = "There") => `${greeting} ${name}`; // returns -> Hi There
console.log(greet("Hi")); // logs -> Hi There
```

<br>

## Object-Oriented Programming

<br>

### 1. Constructor Functions:

<br>
- Functions that are used to create objects.
- Use this to refer to object properties.

<br>

```js:@/script.js
// Object-Oriented Programming (ES5)

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  this.getBirthYear = function(){
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person("John", "Doe", "1990-01-01"); // Create new object with constructor
console.log(person1); // -> { "firstName": "John","lastName": "Doe", "dob": "1990-01-01T00:00:00.000Z"}
console.log(person1.getBirthYear()); // -> 1990
console.log(person1.getFullName()); // -> John Doe
```

<br>

### 2. Prototypes:

<br>
- Add methods to object prototypes to avoid redundancy.

<br>

```js:@/script.js
// Object-Oriented Programming (ES5)

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
}

// Prototype

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe", "1990-01-01");

console.log(person1); // -> { "firstName": "John", "lastName": "Doe", "dob": "1990-01-01T00:00:00.000Z" }
console.log(person1.getFullName()); // -> "John Doe"
console.log(person1.getBirthYear()); // -> 1990
```

<br>

### 3. Built in constructors

<br>
- Built-in constructors for common data types.
- Use built-in constructors to create objects with default values.

<br>

```js:@/script.js
// Object-Oriented Programming (ES5)

const person1 = new Date("1990-01-01"); // Create new object with built-in constructor
console.log(person1); // -> "1990-01-01T00:00:00.000Z"

const person2 = new String("Hello, JavaScript!"); // Create new object with built-in constructor
console.log(person2); // -> "Hello, JavaScript!"

const person3 = new Number(10); // Create new object with built-in constructor
console.log(person3); // -> 10
```

<br>

### 4. ES6 Classes:

<br>
- Syntactic sugar for constructor functions and prototypes.
- Class syntax is more concise and easier to read.
- Use class syntax for creating objects with methods.

<br>

```js:@/script.js
// ES6 CLASSES

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "1990-01-01");

console.log(person1); // -> { "firstName": "John", "lastName": "Doe", "dob": "1990-01-01T00:00:00.000Z" }
console.log(person1.getFullName()); // -> "John Doe"
console.log(person1.getBirthYear()); // -> 1990
```

<br>

## Summary

<br>

In this document, we covered the basics of <span id="tag">JavaScript</span> object-oriented programming. We learned about constructor functions, prototypes, built-in constructors, and ES6 classes. These concepts are essential for creating and managing objects in JavaScript.
