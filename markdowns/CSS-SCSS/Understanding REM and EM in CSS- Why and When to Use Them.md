# 1. Understanding REM and EM in CSS: Why and When to Use Them

<br>

## Overview

<br>
In responsive web design, the use of <span id="tag">rem</span> and <span id="tag">em</span> units is crucial for creating flexible and scalable layouts. Both units are relative, allowing you to design websites that adapt seamlessly to different screen sizes and user preferences. In this document, we will explore why and when to use <span id="tag">rem</span> and <span id="tag">em</span>, as well as their differences and best practices.

<br>

## Prerequisites

<br>

Before diving into the explanation, ensure you have the following knowledge:
<br>
<br>

- Basic understanding of CSS units like <span id="tag">px</span> (pixels).
- Familiarity with font sizes and layout adjustments in web design.
- Experience with scaling web elements for responsiveness.
  <br>
  <br>

## Step-by-Step Implementation

  <br>
  
### 1. What is <span id="tag">rem</span>?
  
  <br>
  <p><span id="tag">rem</span> stands for "root em," and it is a unit of measurement that is relative to the root element's (<span id="tag">&lt;html&gt;</span>) font size. By default, most browsers set the root font size to <span id="tag">16px</span>. Thus, 1 <span id="tag">rem </span>equals the root font size, which can be customized by changing the font size of the root.</p>
  <br>

```scss:@/app/scss/globals.scss
html {
  font-size: 16px;  /* Default font size in most browsers */
}

body {
  font-size: 1rem;  /* Equals 16px */
}

h1 {
  font-size: 2rem;  /* Equals 32px (2 * 16px) */
}
```

<br>

### 2. What is <span id="tag">em</span>?

   <br>
   <p><span id="tag">em</span> is another relative unit but is based on the font size of the parent element, rather than the root. This means that <span id="tag">em</span> values can compound if nested, leading to flexible but sometimes unpredictable sizing.</p>
   <br>
   <br>

```scss:@/app/scss/globals.scss
body {
  font-size: 16px;
}

h1 {
  font-size: 2em;  /* Equals 32px (2 * 16px from body) */
}

.container {
  font-size: 20px;
}

.container p {
  font-size: 1.5em;  /* Equals 30px (1.5 * 20px from .container) */
}
```

   <br>

### 3. Differences Between <span id="tag">rem</span> and <span id="tag">em</span>

   <br>

| Feature     | <span id="tag">rem</span>                                   | <span id="tag">em</span>            |
| ----------- | ----------------------------------------------------------- | ----------------------------------- |
| Based on    | Root element (<span id="tag">&lt;html&gt;</span>) font size | Parent element’s font size          |
| Consistency | More consistent across elements                             | Can lead to compounding effects     |
| Ideal for   | More consistent across elements                             | Local adjustments (nested elements) |

   <br>

### 4. When to Use <span id="tag">rem</span>?

   <br>

- **For global elements:** <span id="tag">rem</span> is ideal for elements that require consistent sizing across the entire website, like base font sizes, headers, and main sections.

- **Responsive design:** It allows easy adjustment for different devices by changing the root font size, which automatically scales all elements using <span id="tag">rem</span> values.
  <br>
  <br>

  ```scss:@/app/scss/globals.scss
  html {
    font-size: 100%;  /* 1rem = 16px */
  }

  @media (min-width: 768px) {
    html {
      font-size: 112.5%;  /* 1rem = 18px */
    }
  }

  body {
    font-size: 1rem;  /* Scales with root font size */
  }
  ```

   <br>

### 5. When to Use <span id="tag">em</span>?

   <br>

- **For nested elements:** <span id="tag">em</span> is useful when you want an element’s size to scale relative to its parent. For example, buttons inside different containers might need to adapt to the container’s font size.

- **Modular components:** When designing reusable components, <span id="tag">em</span> allows flexibility because each instance of the component can inherit and scale based on its parent context.
  <br>
  <br>

  ```scss:@/app/scss/globals.scss
  .container {
    font-size: 20px;
  }

  .container .button {
    font-size: 1.2em;  /* Equals 24px (1.2 * 20px from .container) */
  }
  ```

  <br>

## Explanation of REM and EM

<br>

### Why Use <span id="tag">rem</span>?

<br>
1. **Consistency:** Since <span id="tag">rem</span> is relative to the root font size, it ensures consistent scaling throughout the site. You can adjust the root font size globally (e.g., for accessibility or responsiveness), and all elements using <span id="tag">rem</span> will scale accordingly.

2. **Ease of scaling:** Changing the root font size in media queries can easily adjust the overall site layout for different screen sizes, ensuring responsive typography and element spacing.

<br>

### Why Use <span id="tag">em</span>?

<br>

1. **Flexibility:** <span id="tag">em</span> is perfect when you need localized flexibility. Elements sized with em will adjust according to their parent’s font size, making it great for components that should adapt based on their context.

2. **Component-based design:** In modular designs where components need to scale based on their surrounding context, <span id="tag">em</span> ensures that the size of elements like buttons, text, or padding adjusts according to the specific section they are in.

<br>

## Compounding Issue with <span id="tag">em</span>

<br>
One challenge of using <span id="tag">em</span> is compounding, where nested elements multiply their parent’s size. For example:

<br>

```scss:@/app/scss/globals.scss
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;  /* 1.5 * 20px = 30px */
}

.grandchild {
  font-size: 1.5em;  /* 1.5 * 30px = 45px */
}
```

<br>

In this example, the <span id="tag">grandchild</span> element ends up being much larger than anticipated due to the compounding effect.

<br>

## Summary

<br>
In this document, we explored the <span id="tag">rem</span> and <span id="tag">em</span> units in CSS, why they are crucial for responsive design, and when to use them:
  <br>
  <br>
- REM: Best for global consistency and responsiveness, since it scales based on the root font size.
- EM: Great for flexible and modular design, allowing elements to adapt to their parent’s size, but care should be taken with compounding effects.
  <br>
  <br>

By understanding when to use <span id="tag">rem</span> or <span id="tag">em</span>, you can ensure that your web designs are both flexible and scalable, providing a better experience for users on different devices and screen sizes.
