# 2. JavaScript String Methods

<br>

## Overview

<br>

Strings in JavaScript are sequences of characters used to represent text. JavaScript provides a wide range of methods to work with strings. Below, we will explore common string methods with simple explanations and examples.

<br>

1. <span id="tag">.length</span>

   <br>
   <br>

   The <span id="tag">.length</span> property returns the number of characters in a string.

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const str = "Hello, world!";
   console.log(str.length); // Output: 13
   ```

   <br>

2. <span id="tag">.toUpperCase()</span>

   <br>
   <br>

   Converts all the characters in a string to uppercase.

    <br>
    
     #### Example

     <br>
     ```js:@/script.js
     const str = "Hello, world!";
     console.log(str.toUpperCase()); // Output: HELLO, WORLD!
     ```
     <br>

3. <span id="tag">.toLowerCase()</span>

   <br>
   <br>

   Converts all the characters in a string to lowercase.

    <br>

   #### Example

    <br>
    ```js:@/script.js
    const str = "HELLO, WORLD!";
    console.log(str.toLowerCase()); // Output: hello, world!
    ```
    <br>

4. <span id="tag">.indexOf()</span>
   <br>
   <br>

   Finds the position of the first occurrence of a substring in a string. Returns -1 if not found.

   <br>

   #### Example

  <br>

    ```js:@/script.js
    const str = "Hello, World!";
    console.log(str.indexOf("World")); // Output: 7
    console.log(str.indexOf("world")); // Output: -1
    ```

  <br>

5. <span id="tag">.lastIndexOf()</span>
   <br>
   <br>

   Finds the position of the last occurrence of a substring in a string.

   <br>
    #### Example

  <br>
  
   ``` js:@/script.js
   const str = "JavaScript is fun. JavaScript is powerful.";
   console.log(str.lastIndexOf("JavaScript")); // Output: 19
   ```

   <br>

6. <span id="tag">.slice(start, end)</span>
   <br>
   <br>

   Extracts a part of a string and returns it as a new string. The <span id="tag">end</span> index is not included.

   <br>

   #### Example

   <br>

   ```js:@/script.js
   const str = "Hello, World!";
   console.log(str.slice(0, 5)); // Output: Hello
   console.log(str.slice(7)); // Output: World!
   console.log(str.slice(-6)); // Output: World!
   ```

   <br>

7. <span id="tag">.substring(start, end)</span>
   <br>
   <br>

   Similar to .slice(), but does not accept negative indexes.

   <br>

   #### Example

   <br>
   ```js:@/script.js
   const str = "JavaScript";
   console.log(str.substring(0, 4)); // Output: Java
   console.log(str.substring(4)); // Output: Script
   console.log(str.substring(-3)); // Output: JavaScript
   ```
   <br>

8. <span id="tag">.replace(oldValue, newValue)</span>
   <br>
   <br>

   Replaces the first occurrence of a substring with a new value.

   <br>

   #### Example

   <br>
   ```js:@/script.js
   const str = "I love JavaScript.";
   console.log(str.replace("JavaScript", "coding")); // Output: I love coding.
   ```
   <br>

9. <span id="tag">.replaceAll(oldValue, newValue)</span>
   <br>
   <br>

   Replaces all occurrences of a substring with a new value.

   <br>

   #### Example

   <br>
   ```js:@/script.js
   const str = "Banana is tasty. Banana is healthy.";
   console.log(str.replaceAll("Banana", "Apple")); // Output: Apple is tasty. Apple is healthy.
   ```
   <br>

10. <span id="tag">.trim()</span>
    <br>
    <br>

    Removes whitespace from both ends of a string.

   <br>
   
   #### Example

   <br>
   
   ```js:@/script.
   const str = "   Hello, World!
   console.log(str.trim()); // Output: Hello, Worl
   ```

   <br>

11. <span id="tag">.split(separator)</span>
    <br>
    <br>

    Splits a string into an array of substrings based on a separator.

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const str = "a,b,c,d";
    console.log(str.split(",")); // Output: ["a", "b", "c", "d"]
    console.log(str.split("")); // Output: [ "a", ",", "b", ",", "c", ",", "d" ]
    console.log(str.split(" ")); // Output: [ "a,b,c,d" ]

    // split each word into an array
    const str1 = "JavaScript is fun. JavaScript is powerful.";
    console.log(str1.split(" ")); // Output: [ "JavaScript", "is", "fun.", "JavaScript", "is", "powerful." ]

    // split each character into an array
    const str2 = "JavaScript is fun.";
    console.log(str2.split("")); // Output: [ "J", "a", "v", "a", "S", "c", "r", "i", "p", "t" , " ", "i", "s", " ", "f", "u", "n", "." ]

    ```

    <br>

12. <span id="tag">.concat(string2, string3, ...)</span>
    <br>
    <br>

    Joins two or more strings.

    <br>

    #### Example

    <br>

    ```js:@/script.js
    const str1 = "Hello";
    const str2 = "World";
    console.log(str1.concat(str2)); // Output: HelloWorld
    console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!
    ```

    <br>

13. <span id="tag">.includes(substring)</span>
    <br>
    <br>

    Checks if a string contains a specific substring. Returns true or false.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "I love JavaScript.";
    console.log(str.includes("JavaScript")); // Output: true
    console.log(str.includes("Python")); // Output: false
    ```

    <br>

14. <span id="tag">.startsWith(substring)</span>
    <br>
    <br>

    Checks if a string starts with a specific substring.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "JavaScript is awesome!";
    console.log(str.startsWith("Java")); // Output: true
    console.log(str.startsWith("awesome!")); // Output: false
    ```
    <br>

15. <span id="tag">.endsWith(substring)</span>
    <br>
    <br>

    Checks if a string ends with a specific substring.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "JavaScript is awesome!";
    console.log(str.endsWith("JavaScript")); // Output: false
    console.log(str.endsWith("awesome!")); // Output: true
    ```
    <br>

16. <span id="tag">.charAt(index)</span>
    <br>
    <br>

    Returns the character at a specified index in a string.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "JavaScript";
    console.log(str.charAt(0)); // Output: J
    console.log(str.charAt(4)); // Output: S
    ```
    <br>

17. <span id="tag">.charCodeAt(index)</span>
    <br>
    <br>

    Returns the Unicode value of the character at the specified index.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "JavaScript";
    console.log(str.charCodeAt(0)); // Output: 74
    console.log(str.charCodeAt(4)); // Output: 83
    ```
    <br>

18. <span id="tag">.fromCharCode(code)</span>
    <br>
    <br>

    Returns a string created by using the specified sequence of Unicode values.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116, 32, 105, 115, 32, 97, 119, 101, 115, 111, 109, 101, 33);
    console.log(str); // Output: JavaScript is awesome!
    ```
    <br>

19. <span id="tag">.repeat(count)</span>
    <br>
    <br>

    Returns a new string with the original string repeated <span id="tag">count</span> times.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "Hi!";
    console.log(str.repeat(3)); // Output: Hi!Hi!Hi!
    ```
    <br>

20. <span id="tag">.padStart(targetLength, padString)</span>
    <br>
    <br>

    Pads the beginning of a string with another string until it reaches the target length.

    <br>

    #### Example

    <br>
    ```js:@/script.js
    const str = "5";
    console.log(str.padStart(3, "0")); // Output: 005

    const str1 = "Hello";
    console.log(str1.padStart(5)); // Output: Hello
    console.log(str1.padStart(10, "0")); // Output: 00000Hello

    ```
    <br>

    ```

21. <span id="tag">.padEnd(targetLength, padString)</span>
    <br>
    <br>

    Pads the end of a string with another string until it reaches the target length.

    <br>

    #### Example

    <br>

    ```js:@/script.js

    const str = "5";
    console.log(str.padEnd(3, "0")); // Output: 500

    const str1 = "Hello";
    console.log(str1.padEnd(5)); // Output: Hello
    console.log(str1.padEnd(10, "0")); // Output: Hello00000

    ```

    <br>

22. <span id="tag">.match(regexp)</span>
    <br>
    <br>

    - Returns an array of all the matches in a string.
    - <span id="tag">regexp</span> is the regular expression to match.
    - If <span id="tag">regexp</span> has the global flag (<span id="tag">g</span>), <span id="tag">.match()</span> returns an array of all matches.

    <br>

    #### Example

    <br>

    ```js:@/script.js
    // Matching without the g flag (Single Match)
    const str = "I love JavaScript!";
    const result = str.match(/JavaScript/);
    console.log(str.match(regex)); // Output: [ "JavaScript" ]

    // Matching with the g flag (All Matches)
    // When the regular expression includes the g flag, .match() returns an array of all matches.
    const str1 = "JavaScript is awesome. JavaScript is powerful.";
    const result1 = str1.match(/JavaScript/g);
    console.log(result1); // Output: [ "JavaScript", "JavaScript" ]

    // No Matches
    const str2 = "I love coding!";
    const result2 = str2.match(/JavaScript/);
    console.log(result2); // Output: null

    // Using .match() with Groups
    const str3 = "My favorite language is JavaScript.";
    const result3 = str3.match(/favorite language is (\w+)/);
    console.log(result3); // Output: ["favorite language is JavaScript", "JavaScript"]

    // What to Use Instead of .match()?
    // Use .match() when you want to match a single string.
    // For advanced regular expression handling, consider using .matchAll() (ES2020), which provides an iterator over all matches with detailed capturing group information.
    const str4 = "JavaScript is fun. JavaScript is powerful.";
    const matches = [...str4.matchAll(/JavaScript/g)];
    console.log(matches); // Output: [["JavaScript"], ["JavaScript"]]
    ```

    <br>

23. <span id="tag">.localeCompare(compareString, [locales], [options])</span>
    <br>
    <br>

    - The <span id="tag">.localeCompare()</span> method compares two strings in the current locale and returns a number indicating their relative order. This method is particularly useful for sorting strings alphabetically or culturally, as it respects the rules of the locale.
    - <span id="tag">compareString</span>: The string to compare with.
    - <span id="tag">locales</span> (Optional): A string or array of locale tags (e.g., <span id="tag">"en"</span>, <span id="tag">"fr"</span>, <span id="tag">"de"</span>) to specify the locale for comparison.
    - <span id="tag">options</span> (Optional): An object that specifies comparison behavior, such as sensitivity, case, or usage.

    <br>

    #### Example

    <br>

    ```js:@/script.js
    // Basic Usage
    const str1 = "apple";
    const str2 = "banana";
    console.log(str1.localeCompare(str2)); // Output: -1 (apple < banana)
    console.log(str2.localeCompare(str1)); // Output: 1 (banana > apple)
    console.log(str1.localeCompare("apple")); // Output: 0 (equal)

    // Locale-Sensitive Comparison
    // You can use .localeCompare() to respect locale-specific rules. For example, in some locales, accented characters are treated differently.
    const str3 = "résumé";
    const str4 = "resume";
    console.log(str3.localeCompare(str4, "en", { sensitivity: "base" })); // Output: 0 (treated as equal in English locale)

    // In French, accented characters may be treated differently:
    console.log(str3.localeCompare(str4, "fr")); // Output: 1 (résumé > resume in French locale)

    // Sorting with .localeCompare()
    // You can use .localeCompare() to sort an array of strings alphabetically in a locale-sensitive way.
    const fruits = ["banana", "apple", "cherry"];
    fruits.sort((a, b) => a.localeCompare(b));
    console.log(fruits); // Output: ["apple", "banana", "cherry"] (sorted alphabetically in English locale)

    // Sorting with locale:
    const names = ["ä", "z", "a"];
    names.sort((a, b) => a.localeCompare(b, "de")); // German locale
    console.log(names); // Output: ["a", "ä", "z"] (ä comes after a in German)

    // Options for Advanced Comparisons
    // The options parameter lets you customize the comparison further.
    const str5 = "apple";
    const str6 = "Apple";
    console.log(str5.localeCompare(str6, "en", { sensitivity: "case" })); // Output: -1 (case matters)
    console.log(str5.localeCompare(str6, "en", { sensitivity: "base" })); // Output: 0 (case ignored)

    // Ignore Punctuation
    const str7 = "hello!";
    const str8 = "hello";
    console.log(str7.localeCompare(str8, "en", { ignorePunctuation: true })); // Output: 0 (punctuation ignored)

    ```

    <br>

## Summary

<br>

These string methods allow you to manipulate and analyze strings effectively. Experiment with each method to gain hands-on experience and build your confidence in JavaScript.
