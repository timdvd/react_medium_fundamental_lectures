# props.children
# Getting Started with Create React App

## In React, props.children is a special prop automatically passed to every component.
It represents the content (child elements) nested between a component’s opening and closing tags.

Think of it like a placeholder for anything you put inside a component.

## ✅ Example 1: Basic Usage
```
function Card({ children }) {
  return (
    <div className="card">
      {children}   {/* This is where nested content goes */}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Hello World</h2>
      <p>This is inside the card!</p>
    </Card>
  );
}
```

### 👉 props.children here will be:
```
[
  <h2>Hello World</h2>,
  <p>This is inside the card!</p>
]
```

### So the final render is:
```
<div class="card">
  <h2>Hello World</h2>
  <p>This is inside the card!</p>
</div>
```
## ✅ Example 2: Component Reusability

### props.children makes components flexible:
```
function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p>Welcome back, user!</p>
    </Layout>
  );
}
```

##🔹 Bonus: React.Children Utilities

### React gives helper methods to work with props.children:
 - React.Children.map(children, fn) → safely map over children
 - React.Children.count(children) → count children
 - React.Children.only(children) → ensure only one child
 - React.Children.toArray(children) → convert to array with keys
### More information is here: https://react.dev/reference/react/Children
