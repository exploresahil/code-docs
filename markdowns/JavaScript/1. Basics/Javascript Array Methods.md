# 5. JavaScript Array Methods

<br>

## Overview

<br>

Arrays are one of the most versatile data structures in JavaScript. They come with many built-in methods that allow developers to manipulate, iterate, and transform data easily. Below is a comprehensive list of JavaScript array methods, their descriptions, syntax, and examples.

<br>

1. <span id="tag">Array.push()</span>
   <br>
   <br>

   Adds one or more elements to the end of an array and returns the new length of the array.

   <br>

   #### Syntax

   <br>

   ```js
   array.push(element1, ..., elementN);
   ```

   <br>

   #### Example

   <br>

   ```js
   const fruits = ["apple", "banana"];
   fruits.push("orange");
   console.log(fruits); // Output: ["apple", "banana", "orange"]
   ```

   <br>

2. <span id="tag">Array.pop()</span>
   <br>
   <br>

   Removes the last element from an array and returns that element.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array.pop();
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana", "orange"];
   const lastFruit = fruits.pop();
   console.log(lastFruit); // Output: "orange"
   console.log(fruits);    // Output: ["apple", "banana"]
   ```

   <br>

3. <span id="tag">Array.shift()</span>
   <br>
   <br>

   Removes the first element from an array and returns it.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array.shift();
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana", "orange"];
   const firstFruit = fruits.shift();
   console.log(firstFruit); // Output: "apple"
   console.log(fruits);     // Output: ["banana", "orange"]
   ```

   <br>

4. <span id="tag">Array.unshift()</span>
   <br>
   <br>

   Adds one or more elements to the beginning of an array and returns the new length.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array.unshift(element1, ..., elementN);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["banana", "orange"];
   fruits.unshift("apple");
   console.log(fruits); // Output: ["apple", "banana", "orange"].
   ```

   <br>

5. <span id="tag">Array.concat()</span>
   <br>
   <br>

   Merges two or more arrays into a new array.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array1.concat(array2, ..., arrayN);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana"];
   const vegetables = ["carrot", "spinach"];
   const food = fruits.concat(vegetables);
   console.log(food); // Output: ["apple", "banana", "carrot", "spinach"]
   ```

   <br>

6. <span id="tag">Array.join()</span>
   <br>
   <br>

   Joins all elements of an array into a string, separated by a specified separator.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Narray.join(separator);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana", "orange"];
   const result = fruits.join(", ");
   console.log(result); // Output: "apple, banana, orange"
   ```

   <br>

7. <span id="tag">Array.slice()</span>
   <br>
   <br>

   Returns a shallow copy of a portion of an array into a new array without modifying the original.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array.slice(start, end);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana", "orange", "grape"];
   const citrus = fruits.slice(1, 3);
   console.log(citrus); // Output: ["banana", "orange"]
   ```

   <br>

8. <span id="tag">Array.splice()</span>
   <br>
   <br>

   Adds or removes elements at a specific index of an array.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array.splice(start, deleteCount, item1, ..., itemN);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana", "orange"];
   fruits.splice(1, 1, "grape");
   console.log(fruits); // Output: ["apple", "grape", "orange"]
   ```

   <br>

9. <span id="tag">Array.indexOf()</span>
   <br>
   <br>

   Returns the first index of a specified element, or <span id="tag">-1</span> if the element is not found.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   array.indexOf(searchElement, fromIndex);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const fruits = ["apple", "banana", "orange"];
   console.log(fruits.indexOf("banana")); // Output: 1
   console.log(fruits.indexOf("grape"));  // Output: -1
   ```

   <br>

10. <span id="tag">Array.lastIndexOf()</span>
    <br>
    <br>

    Returns the last index of a specified element, or <span id="tag">-1</span> if the element is not found.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.lastIndexOf(searchElement, fromIndex);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [2, 5, 9, 2];
    console.log(numbers.lastIndexOf(2)); // Output: 3
    ```

    <br>

11. <span id="tag">Array.includes()</span>
    <br>
    <br>

    Determines if an array includes a certain value.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.includes(valueToFind, fromIndex);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const fruits = ["apple", "banana", "orange"];
    console.log(fruits.includes("banana")); // Output: true
    console.log(fruits.includes("grape"));  // Output: false
    ```

    <br>

12. <span id="tag">Array.find()</span>
    <br>
    <br>

    Returns the first element that satisfies the provided testing function.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.find(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [5, 12, 8, 130];
    const found = numbers.find(num => num > 10);
    console.log(found); // Output: 12
    ```

    <br>

13. <span id="tag">Array.findIndex()</span>
    <br>
    <br>

    Returns the index of the first element that satisfies the provided testing function.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.findIndex(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [5, 12, 8, 130];
    const foundIndex = numbers.findIndex(num => num > 10);
    console.log(foundIndex); // Output: 1
    ```

    <br>

14. <span id="tag">Array.map()</span>
    <br>
    <br>

    Creates a new array by applying a function to each element.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.map(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [1, 4, 9];
    const squared = numbers.map(num => num * num);
    console.log(squared); // Output: [1, 16, 81]
    ```

    <br>

15. <span id="tag">Array.filter()</span>
    <br>
    <br>

    Creates a new array with all elements that pass the test implemented by a provided function.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.filter(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [10, 20, 30, 40];
    const filtered = numbers.filter(num => num > 20);
    console.log(filtered); // Output: [30, 40]
    ```

    <br>

16. <span id="tag">Array.reduce()</span>
    <br>
    <br>

    Executes a reducer function on each element and returns a single output value.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.reduce(callback(previousValue, currentValue, currentIndex, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((prev, curr) => prev + curr, 0);
    console.log(sum); // Output: 10
    ```

    <br>

17. <span id="tag">Array.forEach()</span>
    <br>
    <br>

    Executes a provided function once for each array element. It does not return a new array and is often used for iterating over arrays.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.forEach(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const fruits = ["apple", "banana", "orange"];
    fruits.forEach((fruit, index) => {
        console.log(`Index ${index}: ${fruit}`);
    });
    // Output:
    // Index 0: apple
    // Index 1: banana
    // Index 2: orange
    ```

    <br>

18. <span id="tag">Array.every()</span>
    <br>
    <br>

    Tests whether "all elements" in the array pass the provided test function. Returns <span id="tag">true</span> if all elements pass, otherwise <span id="tag">false</span>.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.every(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [2, 4, 6, 8];
    const allEven = numbers.every(num => num % 2 === 0);
    console.log(allEven); // Output: true

    const allOdd = numbers.every(num => num % 2 !== 0);
    console.log(allOdd); // Output: false
    ```

    <br>

19. <span id="tag">Array.some()</span>
    <br>
    <br>

    Tests whether "at least one" element in the array passes the provided test function. Returns <span id="tag">true</span> if at least one element passes, otherwise <span id="tag">false</span>.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.some(callback(element, index, array));
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [1, 2, 3, 4];
    const hasEven = numbers.some(num => num % 2 === 0);
    console.log(hasEven); // Output: true

    const hasOdd = numbers.some(num => num % 2 !== 0);
    console.log(hasOdd); // Output: true

    const has10 = numbers.some((num) => num === 10);
    console.log(has10); // Output: false
    ```

    <br>

20. <span id="tag">Array.fill()</span>
    <br>
    <br>

    Fills all elements of an array from a start index to an end index with a static value. It modifies the original array.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.fill(value, start, end);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const numbers = [1, 2, 3, 4];
    numbers.fill(0, 1, 3);
    console.log(numbers); // Output: [1, 0, 0, 4]
    ```

    <br>

21. <span id="tag">Array.reverse()</span>
    <br>
    <br>

    Reverses the elements of an array in place and returns the modified array.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    array.reverse();
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const fruits = ["apple", "banana", "orange"];
    fruits.reverse();
    console.log(fruits); // Output: ["orange", "banana", "apple"]
    ```

    <br>

## Summary

<br>

In this document, we covered the basics of JavaScript arrays, including their creation, manipulation, and iteration. We also explored some of the most common array methods, such as <span id="tag">push()</span>, <span id="tag">pop()</span>, <span id="tag">shift()</span>, <span id="tag">unshift()</span>, <span id="tag">concat()</span>, <span id="tag">join()</span>, <span id="tag">slice()</span>, <span id="tag">splice()</span>, <span id="tag">indexOf()</span>, <span id="tag">lastIndexOf()</span>, <span id="tag">includes()</span>, <span id="tag">find()</span>, <span id="tag">findIndex()</span>, <span id="tag">map()</span>, <span id="tag">filter()</span>, <span id="tag">reduce()</span>, <span id="tag">forEach()</span>, <span id="tag">every()</span>, <span id="tag">some()</span>, and <span id="tag">fill()</span>, and <span id="tag">reverse()</span>, which are essential for working with arrays in JavaScript.
