# Search and Sort Functionality

<br>

## Overview

<br>
This document outlines the implementation of a search and sort feature within a React application. This feature enables users to search for items by title or number, and sorts the results alphabetically from A to Z.

<br>

## Prerequisites

<br>

- **React:** Basic knowledge of React and JSX.
- **TypeScript:** This hook is written in TypeScript, so your project should be set up to support TypeScript.
- **React hooks knowledge:** Familiarity with React hooks (useState and useEffect).
- A dataset to work with, such as an array of objects.
  <br>

<br>

## Step-by-Step Implementation

<br>

1. Setting Up the Dataset
   <br>
   <br>
   First, we need to define a dataset. Let's assume we have an array of objects, where each object has an id, title, and number. This is our data source for searching and sorting.
   <br>
   <br>

   ```tsx:@/database/db.ts
   export const data = [
    { id: 1, title: "Banana", number: 12345 },
    { id: 2, title: "Apple", number: 67890 },
   { id: 3, title: "Cherry", number: 11223 },
    { id: 4, title: "Date", number: 33445 },
    { id: 5, title: "Elderberry", number: 55667 },
   ];
   ```

<br>

2. Creating the React Component
   <br>
   <br>
   Now, let's build a React component that will display the dataset, filter it based on user input, and sort the results alphabetically.
   <br>
   <br>

   ```tsx:@/components/Home.tsx
   "use client"; // For Next.js applications

   import { useState } from "react";
   import { data } from "@/database/db";

   const Home = () => {
     const [searchTerm, setSearchTerm] = useState("");

     return (
       <section id="Home">
         <input
           type="text"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="Search by title"
         />
         {data &&
           data
             .filter((object) =>
               object.title.toLowerCase().includes(searchTerm.toLowerCase())
             )
             .sort((a, b) => a.title.localeCompare(b.title))
             .map((object) => (
               <div className="card" key={object.id}>
                 <h2>{object.title}</h2>
                 <p>{object.number}</p>
               </div>
             )
           )
         }
       </section>
     );
   };

   export default Home;
   ```

<br>

## Explanation of the Code

<br>
1. State for Search Term
<br>
<br>

    ```tsx:@/components/Home.tsx
    const [searchTerm, setSearchTerm] = useState("");
    ```

<br>
We create a state variable searchTerm that will hold the current value of the search input. This will be updated every time the user types something into the input field.
<br>
<br>
2. Input Field for Search
<br>
<br>

    ```tsx:@/components/Home.tsx
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search by title"
    />
    ```

<br>
This input field is connected to the searchTerm state. The onChange event updates the state whenever the user types, allowing us to filter the data in real-time.
<br>
<br>
3. Filtering the Data
<br>
<br>

    ```tsx:@/components/Home.tsx
    data
      .filter((object) =>
        object.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ```

<br>
We use the filter method on the data array to return only the objects where the title field matches the searchTerm. The toLowerCase() method ensures that the search is case-insensitive.
<br>
<br>
4. Sorting the Data Alphabetically
<br>
<br>

    ```tsx:@/components/Home.tsx
    .sort((a, b) => a.title.localeCompare(b.title))
    ```

<br>
The sort method is applied after filtering. We use localeCompare to compare the title values and sort them alphabetically (A-Z).
<br>
<br>
5. Rendering the Results
<br>
<br>

    ```tsx:@/components/Home.tsx
    .map((object) => (
      <div className="card" key={object.id}>
        <h2>{object.title}</h2>
        <p>{object.number}</p>
      </div>
    ))
    ```

<br>
The filtered and sorted array is mapped over, and for each object, we display a card that shows the title and number.
<br>
<br>

## Implementing Enhanced Search Functionality

<br>
To enhance the search functionality, we can also allow filtering by both the title and number. The updated code snippet is as follows:
<br>
<br>

```tsx:@/components/Home.tsx
"use client"; // For Next.js applications

import { useState } from "react";
import { data } from "@/database/db";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section id="Home">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title or number"
      />
      {data &&
        data
          .filter(
            (object) =>
              object.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (object.number && object.number.toString().includes(searchTerm))
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((object) => (
            <div className="card" key={object.id}>
              <h2>{object.title}</h2>
              <p>{object.number}</p>
            </div>
          )
        )
      }
    </section>
  );
};

export default Home;
```

<br>

### Key Changes

<br>
The filter method now checks both the title and the number:
<br>
<br>

```tsx:@/components/Home.tsx
.filter(
  (object) =>
    object.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (object.number && object.number.toString().includes(searchTerm))
)
```

<br>

### Adding Debouncing (Optional)

<br>
For better performance, you can add debouncing to delay the search execution while the user is typing. This can be done using the useEffect hook.
<br>
<br>

```tsx:@/components/Home.tsx
import { useState, useEffect } from "react";
import { data } from "@/database/db";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <section id="Home">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title or number"
      />
      {data &&
        data
          .filter((object) =>
            object.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            (object.number && object.number.toString().includes(debouncedSearchTerm))
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((object) => (
            <div className="card" key={object.id}>
              <h2>{object.title}</h2>
              <p>{object.number}</p>
            </div>
          )
        )
      }
    </section>
  );
};

export default Home;
```

<br>

## Summary

<br>
In this document, we implemented a simple search and sort functionality for a React component. Here's what we covered:
<br>
<br>

1. **Search by Title and Number:** We enhanced the search to allow users to filter by both title and number.
2. **Sort by A-Z:** We applied the sort() method with localeCompare() to sort the filtered data alphabetically (A-Z).
3. **Rendering:** We mapped over the filtered and sorted data to render a list of cards.
4. **Debouncing (Optional):** For performance improvement, we introduced debouncing to delay the search execution until the user finishes typing.
   <br>
   <br>

This pattern can be easily adapted for other data structures and search fields, giving users an intuitive way to filter and view data in your application.
