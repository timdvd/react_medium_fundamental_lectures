# Components Life Circle
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

# 🔄 React Component Lifecycle

A component’s lifecycle can be divided into three main phases:

## 1. Mounting (when component is being created & inserted into the DOM)

### Methods (class components):
 - constructor() → Initialize state & bind methods.
 - static getDerivedStateFromProps() → Sync state from props (rarely used).
 - render() → Returns JSX.
 - componentDidMount() → Runs after component is mounted (good for API calls, subscriptions, DOM operations).

## 2. Updating (when props or state change)

### Methods:
 - static getDerivedStateFromProps() → Called again if props change.
 - shouldComponentUpdate() → Lets you control re-rendering for performance.
 - render() → Re-renders UI with new data.
 - getSnapshotBeforeUpdate() → Capture info before DOM updates (e.g., scroll position).
 - componentDidUpdate() → Runs after update (good for data fetching if props changed).

## 3. Unmounting (when component is removed from DOM)

### Method:
 - componentWillUnmount() → Cleanup tasks (cancel timers, remove listeners, unsubscribe).

## 🔹 React Hooks equivalent

### In functional components with Hooks, lifecycle effects are handled using useEffect:
 - Mounting → useEffect(() => { ... }, [])
 - Updating → useEffect(() => { ... }, [state, props])
 - Unmounting → Cleanup function in useEffect

```
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted or updated:", count);

    return () => {
      console.log("Cleanup before unmount or before next effect");
    };
  }, [count]); 

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

## Install all packages ( type in cmd `npm i` in your working directory )

### ⚡Would you like me to make you a visual diagram of the lifecycle flow so it’s easier to understand, or do you prefer a code-only explanation?
### More information is here: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
