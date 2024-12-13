# 4. Javascript Object Methods

<br>

## Overview

<br>

Strings in JavaScript are sequences of characters used to represent text. JavaScript provides a wide range of methods to work with strings. Below, we will explore common string methods with simple explanations and examples.

<br>

1. <span id="tag">Object.keys()</span>
   <br>
   <br>

   Returns an array of the keys (property names) of an object.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Object.keys(obj);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const obj = { name: "Alice", age: 25, profession: "Developer" };
   const keys = Object.keys(obj);
   console.log(keys); // Output: ["name", "age", "profession"]
   ```

   <br>

2. <span id="tag">Object.values()</span>
   <br>
   <br>

   Returns an array of the values of an object.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Object.values(obj);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const obj = { name: "Alice", age: 25, profession: "Developer" };
   const values = Object.values(obj);
   console.log(values); // Output: ["Alice", 25, "Developer"]
   ```

   <br>

3. <span id="tag">Object.entries()</span>
   <br>
   <br>

   Returns an array of key-value pairs for an object. Each pair is an array where the first element is the key, and the second is the value.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Object.entries(obj);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const obj = { name: "Alice", age: 25, profession: "Developer" };
   const entries = Object.entries(obj);
   console.log(entries); // Output: [["name", "Alice"], ["age", 25], ["profession", "Developer"]]
   ```

   <br>

4. <span id="tag">Object.assign()</span>
   <br>
   <br>

   Copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Object.assign(target, ...sources);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const target = { a: 1, b: 2 };
   const source = { b: 4, c: 5 };
   const result = Object.assign(target, source);
   console.log(result); // Output: { a: 1, b: 4, c: 5 }
   ```

   <br>

5. <span id="tag">Object.freeze()</span>
   <br>
   <br>

   Freezes an object, preventing any modifications to its properties (no adding, deleting, or editing).

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Object.freeze(obj);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const obj = { name: "Alice" };
   Object.freeze(obj);
   obj.name = "Bob"; // This won't work
   obj.age = 25; // This won't work
   console.log(obj); // Output: { name: "Alice" }
   ```

   <br>

6. <span id="tag">Object.seal()</span>
   <br>
   <br>

   Seals an object, allowing you to modify existing properties but not add or delete properties.

   <br>

   ### Syntax

   <br>

   ```js:@/script.js
   Object.seal(obj);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const obj = { name: "Alice" };
   Object.seal(obj);
   obj.name = "Bob"; // Works
   delete obj.name; // This won't work
   console.log(obj); // Output: { name: "Bob" }
   ```

   <br>

7. <span id="tag">Object.create()</span>
   <br>
   <br>

   Creates a new object with the specified prototype and properties.

   <br>

   ### Syntax

   <br>

   ```js:@/script.js
   Object.create(proto, [propertiesObject]);
   ```

   <br>

   ### Example

   <br>

   ```js:@/script.js
   const obj = Object.create(null);
   obj.name = "John";
   obj.age = 20;
   console.log(obj); // Output: {name: "John", age: 20}

   const proto = { greet() { console.log("Hello!"); } };
   const protoObj = Object.create(proto);
   protoObj.greet(); // Output: Hello!
   ```

   <br>

8. <span id="tag">Object.hasOwnProperty()</span>
   <br>
   <br>

   Checks whether the object contains a specific property as its own (not inherited).

   <br>

   ### Syntax

   <br>

   ```js:@/script.js
   obj.hasOwnProperty(prop);
   ```

   <br>

   ### Example

   <br>

   ```js:@/script.js
   const obj = { name: "Alice" };
   console.log(obj.hasOwnProperty("name")); // Output: true
   console.log(obj.hasOwnProperty("age")); // Output: false
   ```

   <br>

9. <span id="tag">Object.is()</span>
   <br>
   <br>

   Determines whether two values are the same. It’s more reliable than <span id="tag">===</span> for edge cases like <span id="tag">NaN</span>.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Object.is(value1, value2);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Object.is(25, 25)); // Output: true
   console.log(Object.is(NaN, NaN)); // Output: true
   console.log(Object.is(0, -0)); // Output: false
   ```

   <br>

10. <span id="tag">Object.getOwnPropertyNames()</span>
    <br>
    <br>

    Returns an array of all property names (keys) of an object, including non-enumerable ones.

    <br>

    #### Syntax

    <br>
    ```js:@/script.js
    Object.getOwnPropertyNames(obj);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const obj = { name: "Alice", age: 25 };
    Object.defineProperty(obj, "hidden", { value: true, enumerable: false });
    const props = Object.getOwnPropertyNames(obj);
    console.log(props); // Output: ["name", "age", "hidden"]
    ```

    <br>

11. <span id="tag">Object.getPrototypeOf()</span>
    <br>
    <br>

    Returns the prototype of the specified object.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    Object.getPrototypeOf(obj);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const proto = {};
    const obj = Object.create(proto);
    console.log(Object.getPrototypeOf(obj) === proto); // Output: true
    ```

    <br>

12. <span id="tag">Object.defineProperty()</span>
    <br>
    <br>

    Adds or modifies a property on an object with precise control over its behavior (e.g., making it non-enumerable or read-only).

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    Object.defineProperty(obj, prop, descriptor);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const obj = {};
    Object.defineProperty(obj, "name", {
        value: "Alice",
        writable: false, // Can't modify the value
    });
    obj.name = "Bob"; // This won't work
    console.log(obj.name); // Output: "Alice"
    ```

    <br>

13. <span id="tag">Object.toString()</span>
    <br>
    <br>

    Returns a string representing the object. Usually overridden by custom objects.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    obj.toString();
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const obj = {};
    console.log(obj.toString()); // Output: "[object Object]"
    ```

    <br>

## Summary

<br>

JavaScript provides a rich set of methods to manipulate and interact with objects, enabling developers to work efficiently with data structures. These methods help with tasks such as retrieving properties, values, and entries, creating new objects, modifying or sealing objects, and performing comparisons.
