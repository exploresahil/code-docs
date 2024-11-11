# 2. JavaScript DOM Manipulation

<br>

## Overview

<br>

This document provides a guide to JavaScript DOM (Document Object Model) Manipulation, an essential skill for creating dynamic web applications. We’ll cover how to interact with and modify HTML elements using JavaScript to make websites interactive and responsive to user actions.

<br>

## About

<br>

The DOM is a programming interface for HTML and XML documents. It represents the document as a structured tree of nodes, allowing JavaScript to access and manipulate the content, structure, and styling of web pages. Understanding DOM manipulation enables you to create responsive interfaces that respond to user events, change content dynamically, and update styles without reloading the page.

<br>

## Prerequisites

<br>

Before diving in, you should have:
<br>
<br>

- **Basic HTML and CSS Knowledge:** Understanding <span id="tag">HTML</span> and <span id="tag">CSS</span> will help you integrate JavaScript effectively into a webpage.
- **Text Editor:** Any code editor, such as <span id="tag">VS Code</span> or Sublime Text.
- **Web Browser:** A browser like <span id="tag">Chrome</span> or <span id="tag">Firefox</span> to test your JavaScript code.
- **Basic JavaScript Understanding:** Familiarity with basic <span id="tag">JavaScript</span> fundamentals (<span id="tag">variables</span>, <span id="tag">functions</span>, <span id="tag">loops</span>) is recommended.

<br>

## Step-by-Step Implementation

<br>

1. Set Up the HTML Structure
   <br>
   <br>

To create a JavaScript project, start with an HTML file to serve as the foundation for the JavaScript code. Create a new file, <span id="tag">index.html</span>, with the following code:
<br>
<br>

```html:@/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>JS For Beginners</h1>
    </header>

    <section class="container">
      <form id="my-form">
        <h1>Add User</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email">
        </div>
        <input class="btn" type="submit" value="Submit">
      </form>

      <ul id="users"></ul>

      <ul class="items">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
      </ul>
    </section>

    <script src="script.js"></script>
  </body>
</html>
```

<br>

2. Create the <span id="tag">CSS</span> File
   <br>
   <br>
   In the same directory, create a <span id="tag">style.css</span> file.
   <br>
   <br>

```css:@/style.css
/* CSS Document - style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

ul {
  list-style: none;
}

ul li {
  padding: 5px;
  background: #f4f4f4;
  margin: 5px 0;
}

header {
  background: #f4f4f4;
  padding: 1rem;
  text-align: center;
}

.container {
  margin: auto;
  width: 500px;
  overflow: auto;
  padding: 3rem 2rem;
}

#my-form {
  padding: 2rem;
  background: #f4f4f4;
}

#my-form label {
  display: block;
}

#my-form input[type='text'] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px 15px;
  border: 0;
  background: #333;
  color: #fff;
  border-radius: 5px;
  margin: 5px 0;
}

.btn:hover {
  background: #444;
}

.bg-dark {
  background: #333;
  color: #fff;
}

.error {
  background: orangered;
  color: #fff;
  padding: 5px;
  margin: 5px;
}
```

   <br>

3. Create the <span id="tag">JavaScript</span> File
   <br>
   <br>
   In the same directory, create a <span id="tag">script.js</span> file. This file will contain the JavaScript code.
   <br>
   <br>

   1. Selecting Elements:
      <br>
      <br>

   - getElementById(), querySelector(), querySelectorAll(), getElementsByTagName(), getElementsByClassName().
   - Differences between node lists and HTML collections.
     <br>
     <br>

   ```js:@/script.js
   // JavaScript Document - script.js
   // ELEMENT SELECTORS
   // Single Element Selectors
   console.log(document.getElementById("my-form")); // -> <form id="my-form">
   console.log(document.querySelector(".container")); // -> <section class="container">

   // Multiple Element Selectors
   console.log(document.querySelectorAll(".item")); // - NodeList -> [<li class="item">Item 1</li>, <li class="item">Item 2</li>, <li class="item">Item 3</li>]
   console.log(document.getElementsByTagName("li")); // - HTMLCollection -> [<li class="item">Item 1</li>, <li class="item">Item 2</li>, <li class="item">Item 3</li>]
   console.log(document.getElementsByClassName("item")); // - HTMLCollection -> [<li class="item">Item 1</li>, <li class="item">Item 2</li>, <li class="item">Item 3</li>]

   const items = document.querySelectorAll(".item");
   items.forEach((item) => console.log(item)); // -> <li class="item">Item 1</li>, <li class="item">Item 2</li>, <li class="item">Item 3</li>
   ```

     <br>

   2. Manipulating Elements:
      <br>
      <br>

   - Update the <span id="tag">HTML</span>:

     <br>

   ```html:@/index.html
   <!DOCTYPE html>
   <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>JS For Beginners</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <h1>JS For Beginners</h1>
      </header>
      <section class="container">
        <form id="my-form">
          <h1>Add User</h1>
          <div class="msg"></div>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name">
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="text" id="email">
          </div>
          <input class="btn" type="submit" value="Submit">
        </form>
        <ul id="users"></ul>
      </section>

      <script src="main.js"></script>
    </body>
   </html>

   ```

     <br>

   - Change styles, add/remove classes, and modify content.
   - Create new elements dynamically and append them to the DOM.
     <br>
     <br>

   ```js:@/script.js
   // JavaScript Document - script.js

   // MANIPULATING ELEMENTS

   // Change Styles
   const myForm = document.getElementById("my-form");
   myForm.style.backgroundColor = "red";
   myForm.style.color = "white";

   // Add/Remove Classes
   const myForm = document.getElementById("my-form");
   myForm.classList.add("new-class"); // Adds the class "new-class" to the element
   myForm.classList.remove("new-class"); // Removes the class "new-class" from the element

   // Modify Content
   const myForm = document.getElementById("my-form");
   myForm.innerHTML = "Hello, JavaScript!"; // Changes the content of the element to "Hello, JavaScript!"

   ```

   <br>

   3. Event Handling:
      <br>
      <br>

      - Use addEventListener() to respond to user interactions.
      - Use event.target to access the element that triggered the event.
      - Use event.preventDefault() to prevent default behavior.
        <br>
        <br>

      ```js:@/script.js

      // EVENTS

      // Mouse Event
      btn.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target.className); // Logs -> btn
        document.getElementById('my-form').style.background = '#ccc'; // Changes the background color of the form to #ccc
        document.querySelector('body').classList.add('bg-dark'); // Adds the class "bg-dark" to the body element
        ul.lastElementChild.innerHTML = '<h1>Changed</h1>'; // Changes the content of the last item in the list to "Changed"
      });

      // Keyboard Event
      const nameInput = document.querySelector('#name');
      nameInput.addEventListener('input', e => {
        document.querySelector('.container').append(nameInput.value); // Appends the value of the input field to the container
      });

      ```

      <br>

### 4. Building a Simple Application

<br>
- Create a user input form that validates input and displays users in a list.
- Implement error handling and dynamic updates to the UI.
- Use <span id="tag">setTimeout()</span> for delayed actions (e.g., clearing messages).

<br>

```js:@/script.js
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

```

<br>

## Summary

<br>

In this document, we covered the basics of setting up a <span id="tag">JavaScript</span> project with an HTML structure and a linked JavaScript file. We created a simple function that changes text on a webpage in response to a button click. This serves as a foundation for more complex JavaScript projects.
