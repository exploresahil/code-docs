# 2. Creating Custom SCSS Functions for REM and EM Units

<br>

## Overview

<br>
This document explains how to create custom SCSS functions to convert pixel values into <span id="tag">rem</span> and <span id="tag">em</span> units. The functions provided ensure a standard conversion for responsive design and alert users if they mistakenly provide units when only numbers should be used. We will walk through the code to understand its functionality, structure, and usage.

<br>

## Prerequisites

<br>

Before diving into the implementation, ensure you have the following knowledge and tools:
<br>
<br>

- **Sass:** Basic understanding of SCSS (Sass).
- Familiarity with the concepts of <span id="tag">rem</span> (root em) and <span id="tag">em</span> units in CSS.
- A working SCSS environment installed (e.g., Sass CLI, Webpack with Sass loader, Live Sass Compiler).
  <br>
  <br>

## Step-by-Step Implementation

  <br>

1. Define the <span id="tag">rem()</span> Function
   <br>
   <br>

   The <span id="tag">rem()</span> function converts a unitless pixel value into a <span id="tag">rem</span> value by dividing the input by <span id="tag">16</span>. It also throws an error if the input contains units (e.g., <span id="tag">px</span>).
   <br>
   <br>

   ```scss:@/app/scss/_functions.scss
   @function rem($pixel) {
    @if math.is-unitless($pixel) {
     @return math.div($pixel, 16) + rem;
    } @else {
     @error 'Don\'t use units when using the rem() function; only numbers.';
    }
   }
   ```

<br>

2. Define the <span id="tag">em()</span> Function
   <br>
   <br>
   Similarly, the <span id="tag">em()</span> function converts a unitless pixel value into an <span id="tag">em</span> value by dividing the input by <span id="tag">16</span>. It also validates that the input is unitless, throwing an error otherwise.
   <br>
   <br>

   ```scss:@/app/scss/_functions.scss
   @function em($pixel) {
    @if math.is-unitless($pixel) {
     @return math.div($pixel, 16) + em;
    } @else {
     @error 'Don\'t use units when using the em() function; only numbers.';
    }
   }
   ```

   <br>

3. Use the Functions in Your SCSS Code<br>
   <br>
   Once these functions are defined, you can use them anywhere in your stylesheets for consistent conversions between pixels and <span id="tag">rem</span>/<span id="tag">em</span>.
   <br>
   <br>

   ```scss:@/app/scss/style.scss
    @use "@/app/scss/functions" as *;  // Import the functions

    body {
      font-size: rem(16);  // Converts 16px to 1rem
    }

    h1 {
      font-size: em(32);  // Converts 32px to 2em
    }

    p {
      font-size: rem(16);  // Converts 16px to 1rem
    }
   ```

<br>

## Explanation of the Code

<br>

#### <span id="tag">@function rem($pixel)</span>

<br>

- Purpose: Converts pixel values into <span id="tag">rem</span> units.
- Parameter: <span id="tag">$pixel</span> is a number representing the pixel value you want to convert.
- Logic: The function checks whether the input is unitless using <span id="tag">math.is-unitless($pixel)</span>. If true, it divides the pixel value by <span id="tag">16</span> (the default browser font size) using <span id="tag">math.div()</span>, appending <span id="tag">rem</span> as the unit. If the value is not unitless, it throws an error, ensuring that only valid inputs are processed.

<br>

#### <span id="tag">@function em($pixel)</span>

<br>

- Purpose: Converts pixel values into <span id="tag">em</span> units.
- Parameter: <span id="tag">$pixel</span> is a number representing the pixel value to be converted.
- Logic: Similar to the <span id="tag">rem()</span> function, this function checks for a unitless value using <span id="tag">math.is-unitless($pixel)</span>. If valid, it divides the pixel value by <span id="tag">16</span> and appends <span id="tag">em</span>. Otherwise, an error is thrown, guiding the user to use only numbers (unitless values).

<br>

#### Error Handling

<br>
In both functions, the <span id="tag">@error</span> directive is used to give clear feedback when the input is incorrect (i.e., when units are provided). This helps developers avoid common mistakes and ensures proper usage of the functions.

<br>

#### Why <span id="tag">16?</span>

<br>
The value <span id="tag">16</span> is commonly used as it's the default font-size of most browsers. Dividing pixels by <span id="tag">16</span> provides a consistent conversion into relative units like <span id="tag">rem</span> and <span id="tag">em</span>.

<br>

## Summary

<br>
In this document, we covered:

<br>

- How to define custom SCSS functions to convert pixels into <span id="tag">rem</span> and <span id="tag">em</span>.
- A step-by-step explanation of how the code works and why it's useful.
- The importance of error handling to guide proper usage of these functions.

<br>
These functions are helpful for ensuring responsive design consistency, making it easier to scale text and layout elements according to the root font size or the relative size of parent elements. By using them, you can streamline your workflow and maintain cleaner, more flexible stylesheets.
