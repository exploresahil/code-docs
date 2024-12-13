# 3. JavaScript Number Methods

<br>

## Overview

<br>

JavaScript provides a variety of built-in methods to work with numbers. These methods help perform conversions, rounding, and other numerical operations. Below, we will explore common number methods with simple explanations and examples.

<br>

1. <span id="tag">Number.isNaN()</span>
   <br>
   <br>

   Checks whether a given value is an integer.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Number.isNaN(value);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Number.isNaN(NaN)); // Output: true
   console.log(Number.isNaN(10)); // Output: false
   console.log(Number.isNaN("Hello")); // Output: false
   console.log(Number.isNaN(Number("Hello"))); // Output: true - NaN is a number
   ```

   <br>

2. <span id="tag">Number.isFinite()</span>
   <br>
   <br>

   Checks whether a value is a finite number (neither <span id="tag">Infinity</span>, <span id="tag">-Infinity</span>, nor <span id="tag">NaN</span>).

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Number.isFinite(value);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Number.isFinite(10)); // Output: true
   console.log(Number.isFinite(Infinity)); // Output: false
   console.log(Number.isFinite("10")); // Output: false
   ```

   <br>

3. <span id="tag">Number.isInteger()</span>
   <br>
   <br>

   Checks whether a value is an integer.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Number.isInteger(value);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Number.isInteger(10)); // Output: true
   console.log(Number.isInteger(10.5)); // Output: false
   console.log(Number.isInteger("10")); // Output: false
   ```

   <br>

4. <span id="tag">Number.isSafeInteger()</span>
   <br>
   <br>

   Checks if a number is a "safe integer" (within the range of ±2^53 - 1).

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Number.isSafeInteger(value);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Number.isSafeInteger(42)); // Output: true
   console.log(Number.isSafeInteger(9007199254740992)); // Output: false
   ```

   <br>

5. <span id="tag">Number.parseFloat()</span>
   <br>
   <br>

   Converts a string into a floating-point number.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Number.parseFloat(string);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Number.parseFloat("42.5")); // Output: 42.5
   console.log(Number.parseFloat("42px")); // Output: 42
   console.log(Number.parseFloat("Hello")); // Output: NaN
   ```

   <br>

6. <span id="tag">Number.parseInt()</span>
   <br>
   <br>

   Converts a string into an integer, stopping at the first non-numeric character.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   Number.parseInt(string, [radix]);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   console.log(Number.parseInt("42")); // Output: 42
   console.log(Number.parseInt("42.5")); // Output: 42
   console.log(Number.parseInt("42px")); // Output: 42
   console.log(Number.parseInt("Hello")); // Output: NaN
   console.log(Number.parseInt("101", 2)); // Output: 5 (binary to decimal)
   console.log(typeof Number.parseInt("42")); // Output: "number"
   ```

   <br>

7. <span id="tag">Number.toExponential()</span>
   <br>
   <br>

   Converts a number to a string in exponential (scientific) notation.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   number.toExponential(fractionDigits);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const num = 12345;
   console.log(num.toExponential(2)); // Output: "1.23e+4"
   console.log(num.toExponential(0)); // Output: "1e+4"
   console.log(typeof num.toExponential(2)); // Output: "string"
   ```

   <br>

8. <span id="tag">Number.toFixed()</span>
   <br>
   <br>

   Converts a number to a string, keeping a specified number of decimals.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   num.toFixed(digits);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const num = 123.456;
   console.log(num.toFixed(2)); // Output: "123.46"
   console.log(num.toFixed(0)); // Output: "123"
   console.log(num.toFixed(5)); // Output: "123.45600"
   console.log(typeof num.toFixed(2)); // Output: "string"
   ```

   <br>

9. <span id="tag">Number.toPrecision()</span>
   <br>
   <br>

   Formats a number to a specified total number of significant digits.

   <br>

   #### Syntax

   <br>

   ```js:@/script.js
   number.toPrecision(precision);
   ```

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const num = 12345.6789;
   console.log(num.toPrecision(4)); // Output: "1.235e+4"
   console.log(num.toPrecision(6)); // Output: "12345.7"
   console.log(typeof num.toPrecision(4)); // Output: "string"
   ```

   <br>

10. <span id="tag">Number.prototype.toString()</span>
    <br>
    <br>

    Converts a number to a string, optionally using a specified base.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    number.toString([radix]);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const num = 255;
    console.log(num.toString()); // Output: "255"
    console.log(num.toString(2)); // Output: "11111111" (binary)
    console.log(num.toString(16)); // Output: "ff" (hexadecimal)
    console.log(typeof num.toString(2)); // Output: "string"
    ```

    <br>

11. <span id="tag">Number.prototype.valueOf()</span>
    <br>
    <br>

    Returns the primitive value of a <span id="tag">Number</span> object.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    number.valueOf();
    ```

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const numObj = new Number(42);
    console.log(numObj); // Output: Number { 42 }
    console.log(typeof numObj); // Output: "object"
    console.log(numObj.valueOf()); // Output: 42
    console.log(typeof numObj.valueOf()); // Output: "number"
    ```

    <br>

12. <span id="tag">Number.prototype.toLocaleString()</span>
    <br>
    <br>

    Returns a string with a language sensitive representation of this number.

    <br>

    #### Syntax

    <br>

    ```js:@/script.js
    number.toLocaleString([locales[, options]]);
    ```

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const num = 123456789;
    console.log(num.toLocaleString()); // Output: "123,456,789"
    console.log(num.toLocaleString("en-US")); // Output: "123,456,789"
    console.log(num.toLocaleString("de-DE")); // Output: "123.456.789"
    console.log(num.toLocaleString("fr-FR")); // Output: "123 456 789"
    console.log(num.toLocaleString("es-ES")); // Output: "123.456.789"
    console.log(num.toLocaleString("it-IT")); // Output: "123.456.789"
    console.log(num.toLocaleString("ja-JP")); // Output: "123,456,789"
    console.log(num.toLocaleString("ru-RU")); // Output: "123 456 789"
    console.log(num.toLocaleString("zh-CN")); // Output: "123,456,789"
    ```

    <br>

13. <span id="tag">Number.MIN_VALUE</span> and <span id="tag">Number.MAX_VALUE</span>
    <br>
    <br>

    The <span id="tag">Number.MIN_VALUE</span> and <span id="tag">Number.MAX_VALUE</span> properties represent the minimum and maximum values allowed by the <span id="tag">Number</span> object.

    <br>

    - <span id="tag">Number.MIN_VALUE</span> returns the smallest positive number that JavaScript can represent.
    - <span id="tag">Number.MAX_VALUE</span> returns the largest positive number that JavaScript can represent.

    <br>

    #### Example

    <br>

    ```js:@/script.js
    console.log(Number.MIN_VALUE); // Output: 5e-324
    console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
    ```

    <br>

14. <span id="tag">Number.EPSILON</span>
    <br>
    <br>

    Represents the smallest interval between two representable numbers.

    <br>

    #### Example

    <br>

    ```js:@/script.js
    console.log(Number.EPSILON); // Output: 2.220446049250313e-16
    ```

    <br>

## Summary

<br>

JavaScript's number methods provide robust functionality to handle and manipulate numeric data. Here's what they offer:

<br>

1. Validation: Methods like <span id="tag">Number.isInteger()</span>, <span id="tag">Number.isNaN()</span>, and <span id="tag">Number.isFinite()</span> help validate numbers effectively.

2. Conversion: Use <span id="tag">Number.parseInt()</span> and <span id="tag">Number.parseFloat()</span> to extract numbers from strings.

3. Precision Handling: Use <span id="tag">toFixed()</span>, <span id="tag">toPrecision()</span>, and <span id="tag">toExponential()</span> for controlling numeric precision and representation.

4. Constants: Built-in constants like <span id="tag">Number.MAX_VALUE</span> and <span id="tag">Number.MIN_VALUE</span> help understand JavaScript's numeric limits.

<br>

By mastering these methods, you can write cleaner, more precise, and more efficient code for numerical operations.
