# Error Boundaries
# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#⚠️ What is an Error Boundary?

### An Error Boundary is a special React component that catches JavaScript errors anywhere in its child component tree and prevents the whole app from crashing.

### Instead of showing a blank screen, it lets you display a fallback UI.

## 🛠 When to use Error Boundaries
 - Catch runtime errors in rendering, lifecycle methods, and constructors of child components.
 - Show a nice error message instead of crashing.
 - Log errors (e.g., send to a monitoring service like Sentry).

## 👉 Error Boundaries do NOT catch:
 - Event handler errors
 - Asynchronous code (e.g., setTimeout, Promises)
 - Server-side rendering (SSR)
 - Errors thrown inside an Error Boundary itself

## ✅ Example: Creating an Error Boundary
```
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI shows
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error details (to console, Sentry, etc.)
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. 😢</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```
🖼 Usage Example
```
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
```

### If BuggyComponent crashes, the ErrorBoundary will catch the error and show the fallback UI instead of crashing the whole app.
### More information is here: https://react.dev/reference/react/Component#componentdidcatch
