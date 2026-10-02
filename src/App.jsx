import React from "react";

// Part (a): Render HTML without JSX
function WithoutJSX() {
  const element = React.createElement(
    "h2",
    null,
    "Hello without JSX"
  );

  return (
    <section>
      <h2>Part (a) - Rendering HTML</h2>

      {element}

      <p>Hello from JSX!</p>
    </section>
  );
}

// Part (b): JSX expressions, attributes and inline styles
function JSXExample() {
  const userName = "React Developer";
  const today = new Date().toDateString();

  return (
    <section>
      <h2>Part (b) - JSX Markup</h2>

      <p>Welcome, {userName}!</p>

      <p>Today is: {today}</p>

      <p>2 + 2 = {2 + 2}</p>

      <div
        className="container"
        style={{
          color: "blue",
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >
        This text uses JSX attributes and inline styles.
      </div>
    </section>
  );
}

// Part (c): Function Component
function Greeting(props) {
  return <h3>Hello, {props.name}!</h3>;
}

// Part (c): Class Component
class WelcomeMessage extends React.Component {
  render() {
    return (
      <h3 style={{ color: "green" }}>
        React is awesome!
      </h3>
    );
  }
}

// App Component - Nesting components
function App() {
  return (
    <div className="app">

      <h1>FSD Lab - Experiment 5</h1>

      <WithoutJSX />

      <JSXExample />

      <section>
        <h2>Part (c) - Creating and Nesting Components</h2>

        <Greeting name="Alice" />

        <Greeting name="Bob" />

        <WelcomeMessage />
      </section>

    </div>
  );
}

export default App;