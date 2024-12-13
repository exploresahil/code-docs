# 1. JavaScript String Operations

<br>

## Overview

<br>

Strings are fundamental in JavaScript and offer a variety of operations to manipulate and transform text. Below is a comprehensive guide to common string operations in JavaScript, including their usage and examples.

<br>

### 1. Concatenation

<br>

Combines two or more strings into a single string.

<br>

#### Example

<br>

```javascript
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe
```

<br>

### 2. Template Literals

<br>

Template literals are a new feature in JavaScript that allow for more efficient and readable string concatenation. They provide a more concise way to create strings by using placeholders and expressions. Template literals are enclosed in backticks (\` \`) and can include expressions inside the string using the \`${ }\` syntax.

<br>

#### Example

<br>

```javascript
const name = "John";
const age = 30;
const message = `My name is ${name}, and I am ${age} years old.`;
console.log(message); // Output: "My name is John, and I am 30 years old."
```

<br>

### 3. Accessing Characters

<br>

JavaScript strings are zero-indexed, meaning the first character has an index of 0. You can access individual characters in a string using square brackets and the index of the character.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
console.log(str[0]); // Output: "J"
console.log(str[str.length - 1]); // Output: "t"
```

<br>

### 4. String Comparison

<br>

Compare two strings using relational operators (<span id="tag">&lt;</span>, <span id="tag">&gt;</span>, <span id="tag">===</span>, <span id="tag">!==</span>).

<br>

#### Example

<br>

```javascript
const str1 = "apple";
const str2 = "banana";

console.log(str1 < str2); // Output: true
console.log(str1 > str2); // Output: false
console.log(str1 === str2); // Output: false
console.log(str1 !== str2); // Output: true
```

<br>

### 5. Checking Substring

<br>

Check if a string contains a substring using the <span id="tag">includes()</span> method.

<br>

#### Example

<br>

```javascript
const str = "JavaScript is awesome!";

console.log(str.includes("JavaScript")); // Output: true
console.log(str.includes("Python")); // Output: false
```

<br>

### 6. Splitting a String

<br>

Split a string into an array using the <span id="tag">split()</span> method.

<br>

#### Example

<br>

```javascript
const str = "JavaScript is awesome!";
const str1 = "red,green,blue";
const words = str.split(" ");
const colors = str1.split(",");

console.log(words); // Output: ["JavaScript", "is", "awesome!"]
console.log(colors); // Output: ["red", "green", "blue"]
```

<br>

### 7. Joining Strings

<br>
Join an array of strings into a single string using the <span id="tag">join()</span> method.

<br>

#### Example

<br>

```javascript
const colors = ["red", "green", "blue"];
const str = colors.join("-");
console.log(str); // Output: "red-green-blue"
```

<br>

### 8. Changing Case

<br>

Use the <span id="tag">toUpperCase()</span> and <span id="tag">toLowerCase()</span> methods to change the case of a string.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
console.log(str.toUpperCase()); // Output: "JAVASCRIPT"
console.log(str.toLowerCase()); // Output: "javascript"
```

<br>

### 9. Trimming

<br>

Use the <span id="tag">trim()</span> method to remove whitespace from the start and end of a string.

<br>

#### Example

<br>

```javascript
const str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"
```

<br>

### 10. String Replacement

<br>

Use the <span id="tag">replace()</span> method to replace a substring with another substring.

<br>

#### Example

<br>

```javascript
const str = "I like cats.";
const newStr = str.replace("cats", "dogs");
console.log(newStr); // Output: "I like dogs."
```

<br>

### 11. Padding

<br>

Use the <span id="tag">padStart()</span> and <span id="tag">padEnd()</span> methods to add whitespace or a string to the start or end of a string.

<br>

#### Example

<br>

```javascript
const str = "5";
console.log(str.padStart(3, "0")); // Output: "005"
console.log(str.padEnd(3, "0")); // Output: "500"
```

<br>

### 12. Repeating Strings

<br>

Use the <span id="tag">repeat()</span> method to repeat a string a specified number of times.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
const repeatedStr = str.repeat(3);
console.log(repeatedStr); // Output: "JavaScriptJavaScriptJavaScript"
```

<br>

### 13. Extracting Substrings

<br>

Extract parts of a string using <span id="tag">slice()</span>, <span id="tag">substring()</span>, or <span id="tag">substr()</span>. These methods allow you to extract specific parts of a string and return them as a new string.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
console.log(str.slice(0, 4)); // Output: "Java"
console.log(str.substring(4, 10)); // Output: "Script"
```

<br>

### 14. Length Property

<br>

Use the <span id="tag">length</span> property to get the length of a string.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
console.log(str.length); // Output: 8
```

<br>

### 15. Converting to Arrays

<br>

Convert a string to an array of characters using <span id="tag">split()</span>. This method splits a string into an array of substrings based on a specified separator.

<br>

#### Example

<br>

```javascript
const str = "abc";
const chars = str.split("");
console.log(chars); // Output: ["a", "b", "c"]
```

<br>

### 16. Searching Strings

<br>

Search for a substring within a string using <span id="tag">indexOf()</span>, <span id="tag">lastIndexOf()</span>, or <span id="tag">includes()</span>. These methods allow you to find the position of a substring within a string and determine if it exists.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
console.log(str.indexOf("J")); // Output: 0
console.log(str.indexOf("s")); // Output: -1
console.log(str.indexOf("Script")); // Output: 4
console.log(str.lastIndexOf("s")); // Output: -1
console.log(str.lastIndexOf("Script")); // Output: 4
console.log(str.includes("s")); // Output: false
console.log(str.includes("Script")); // Output: true
console.log(str.includes("Scripts")); // Output: false
```

<br>

### 17. Checking Start and End

<br>

Check if a string starts or ends with a specified substring using <span id="tag">startsWith()</span> and <span id="tag">endsWith()</span>. These methods return a boolean value indicating whether the string matches the specified condition.

<br>

#### Example

<br>

```javascript
const str = "JavaScript";
console.log(str.startsWith("Java")); // Output: true
console.log(str.startsWith("JavaScript")); // Output: true
console.log(str.startsWith("Javas")); // Output: false
console.log(str.endsWith("Script")); // Output: true
console.log(str.endsWith("JavaScript")); // Output: true
console.log(str.endsWith("Java")); // Output: false
```

<br>

## Summary

<br>

In this document, we covered the basics of JavaScript string operations, including concatenation, template literals, accessing characters, string comparison, checking substrings, splitting strings, joining strings, changing case, trimming, string replacement, padding, repeating strings, extracting substrings, getting the length of a string, converting to arrays, searching strings, and checking start and end. These operations are essential for working with strings in JavaScript and can be used to manipulate and transform text in various ways.
