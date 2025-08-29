# Why use Render Props
 - To reuse logic across multiple components without repeating code.
 - Alternative to Higher-Order Components (HOCs).
 - Useful for scenarios like: data fetching, mouse tracking, form handling, etc.

## Example 1: Simple Render Props
```
import React, { useState } from "react";

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

export default function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          Mouse position: {x}, {y}
        </h1>
      )}
    />
  );
}
```
