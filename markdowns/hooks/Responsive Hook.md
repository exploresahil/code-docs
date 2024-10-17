# 1. Responsive Hook

<br>

## Overview

<br>
The <span id="tag">useResponsive</span> hook is a custom hook in React that allows developers to detect and respond to changes in the browser's viewport width, making it easier to create responsive designs. By tracking the screen width, the hook assigns a <span id="tag">breakpoint</span> value and provides helpful boolean flags (<span id="tag">isMobile</span>, <span id="tag">isTablet</span>, <span id="tag">isDesktop</span>, and <span id="tag">isXLarge</span>) to indicate which category the current screen size falls into.
<br>
<br>
This hook simplifies the process of making components adapt to various screen sizes, such as mobile, tablet, desktop, and extra-large screens, by providing dynamic updates whenever the window is resized.

<br>

## Prerequisites

<br>

- **React:** Basic knowledge of React and JSX.
- **TypeScript:** This hook is written in TypeScript, so your project should be set up to support TypeScript.
- **React hooks knowledge:** Familiarity with React hooks (<span id="tag">useState</span> and <span id="tag">useEffect</span>).
- **Browser APIs:** Basic knowledge of browser <span id="tag">window</span> APIs, particularly the <span id="tag">resize</span> event and <span id="tag">window.innerWidth</span>.  
  <br>

<br>

## Step-by-Step Implementation

<br>

1. Create the <span id="tag">useResponsive</span> Hook
   <br>
   <br>

   ```tsx:@/hooks/useResponsive.ts
   import { useState, useEffect } from "react";

   type Breakpoint = "small" | "medium" | "large" | "xLarge";

   const getBreakpoint = (width: number): Breakpoint => {
     if (width >= 2040) return "xLarge";
     if (width >= 1025) return "large";
     if (width >= 820) return "medium";
     return "small";
   };

   const useResponsive = () => {
     // Initialize the breakpoint state as "small"
     const [breakpoint, setBreakpoint] = useState<Breakpoint>("small");

     // Boolean values based on the current breakpoint
     const isMobile = breakpoint === "small";
     const isTablet = breakpoint === "medium";
     const isDesktop = breakpoint === "large";
     const isXLarge = breakpoint === "xLarge";

     // Effect to handle window resizing and update breakpoint
     useEffect(() => {
       const handleWindowResize = () => {
         setBreakpoint(getBreakpoint(window.innerWidth));
       };

       // Listen for window resize events and update breakpoint
       window.addEventListener("resize", handleWindowResize);

       // Initialize the breakpoint on mount
       handleWindowResize();

       // Cleanup the event listener on unmount
       return () => {
         window.removeEventListener("resize", handleWindowResize);
       };
     }, []);

     // Utility to manually get a breakpoint for any given width
     const useBreakpoint = (width: number): Breakpoint => {
       return getBreakpoint(width);
     };

     return {
       breakpoint,   // The current breakpoint
       isMobile,     // Whether the current screen size is "small"
       isTablet,     // Whether the current screen size is "medium"
       isDesktop,    // Whether the current screen size is "large"
       isXLarge,     // Whether the current screen size is "xLarge"
       useBreakpoint // A utility to get the breakpoint for any width
     };
   };

   export default useResponsive;
   ```

<br>

- **State Initialization (<span id="tag">useState</span>):**
  The <span id="tag">breakpoint</span> state holds the current screen size category. By default, it's initialized to <span id="tag">"small"</span>.

- **Effect Hook (<span id="tag">useEffect</span>):**
  This effect listens for <span id="tag">resize</span> events on the <span id="tag">window</span>. Every time the browser is resized, it updates the <span id="tag">breakpoint</span> value based on the new window width.

- **getBreakpoint Function:**
  This helper function determines the breakpoint category based on the current width. The categories are:
  <br>
  <br>

  ```tsx:@/hooks/useResponsive.ts
    <span id="tag">"small"</span>: for screens narrower than 820px (mobile)
    <span id="tag">"medium"</span>: for screens between 820px and 1024px (tablet)
    <span id="tag">"large"</span>: for screens between 1025px and 2040px (desktop)
    <span id="tag">"xLarge"</span>: for screens wider than 2040px (extra-large screens)
  ```

  <br>

- **Responsive Helpers:**
  Four boolean values (<span id="tag">isMobile</span>, <span id="tag">isTablet</span>, <span id="tag">isDesktop</span>, and <span id="tag">isXLarge</span>) help developers to check the current screen size category easily within their components.

- **useBreakpoint Utility:**
  The <span id="tag">useBreakpoint</span> utility allows developers to determine the <span id="tag">breakpoint</span> for any arbitrary width. This could be useful if you want to check what category a given width falls into, aside from the current window width.

<br>
2. Using <span id="tag">useResponsive</span> in Components
    <br>
    <br>

    ```tsx:@/component/ResponsiveComponent.tsx
    "use client"; // For Next.js applications

    import React from "react";
    import useResponsive from "./useResponsive"; // Import the hook

    const ResponsiveComponent = () => {
      // Destructure the values returned from useResponsive
      const { isMobile, isTablet, isDesktop, isXLarge, breakpoint, useBreakpoint } = useResponsive();

      // Example of using the useBreakpoint function
      const breakpointForCustomWidth = useBreakpoint(1500); // This will return "large" based on the width passed

      return (
        <div>
          {/* Display the current breakpoint */}
          <h1>Current Breakpoint: {breakpoint}</h1>

          {/* Conditionally render messages based on screen size */}
          {isMobile && <p>You are on a mobile device.</p>}
          {isTablet && <p>You are on a tablet.</p>}
          {isDesktop && <p>You are on a desktop.</p>}
          {isXLarge && <p>You are on an extra-large screen.</p>}

          {/* Display the calculated breakpoint for a custom width (1500px in this case) */}
          <p>Breakpoint for width 1500px: {breakpointForCustomWidth}</p>
        </div>
      );
    };

    export default ResponsiveComponent;
    ```

<br>

## Summary

<br>
The <span id="tag">useResponsive</span> hook provides an easy-to-implement and versatile way to handle responsive behavior in your React application. With it, you can adapt to different screen sizes and change the appearance or functionality of your components accordingly. This can be a powerful tool for creating responsive layouts, improving user experience across various devices, and optimizing your application for mobile, tablet, desktop, and extra-large screen resolutions.
<br>
<br>

#### Key Takeaways:

<br>

- **Breakpoints:** The hook defines four screen sizes: small (mobile), medium (tablet), large (desktop), and xLarge (extra-large screens).
- **Real-Time Responsiveness:** The hook updates automatically when the window size changes.
- **Utilities:** The hook provides helper flags (<span id="tag">isMobile</span>, <span id="tag">isTablet</span>, <span id="tag">isDesktop</span>, and <span id="tag">isXLarge</span>) to easily determine the current screen size category.
  <br>
  <br>

#### Breakpoint Flags:

<br>

- <span id="tag">breakpoint</span>: Indicates the current screen size category ("small", "medium", "large", "xLarge").
- <span id="tag">isMobile</span>: A boolean that is true when the screen size is small (typically mobile).
- <span id="tag">isTablet</span>: A boolean that is true when the screen size is medium (typically tablet).
- <span id="tag">isDesktop</span>: A boolean that is true when the screen size is large (typically desktop).
- <span id="tag">isXLarge</span>: A boolean that is true when the screen size is extra-large (for wide monitors).
- <span id="tag">useBreakpoint</span>: A utility function to get the breakpoint for any specific width.
