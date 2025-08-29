# Portals

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🔹 What is a React Portal?

### Normally, React renders components inside the DOM tree hierarchy of their parent.
### Portals let you render children into a different part of the DOM tree while keeping them part of the same React component tree.

### 🔹 Basic Syntax
```
import { createPortal } from "react-dom";

function MyPortal({ children }) {
  return createPortal(
    children,
    document.getElementById("portal-root") // target DOM node
  );
}
```

### In index.html, you might have:
```
<div id="root"></div>
<div id="portal-root"></div> <!-- portal target -->
```
### 🔹 Example: Modal with Portals
```
import { createPortal } from "react-dom";
import { useState } from "react";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl shadow-lg relative">
        {children}
        <button 
          className="absolute top-2 right-2 text-gray-600" 
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button onClick={() => setOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold">Hello from Portal!</h2>
          <p>This is rendered outside the main DOM tree.</p>
        </Modal>
      )}
    </div>
  );
}
```
##🔹 When to Use Portals
 - ✅ Modals, dialogs, and popups (to avoid CSS overflow: hidden / z-index issues)
 - ✅ Tooltips
 - ✅ Dropdown menus
 - ✅ Anything that should "break out" of parent’s CSS/DOM constraints

## Install all packages ( type in cmd npm i in your working directory )

### More information is here: https://react.dev/reference/react-dom/createPortal
