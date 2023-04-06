# REACT NOTES

## REACT
ReactJS is an open-source JavaScript library for building user interfaces, created by Facebook. It allows developers to build complex UIs using a component-based architecture, where each component represents a part of the user interface. React uses a virtual DOM (Document Object Model) to efficiently update and render components, improving the performance and user experience of web applications. It is widely used for building web applications, mobile applications, and desktop applications.

## DOM
In React, the DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document as a tree-like structure of nodes. React uses a virtual DOM, a lightweight representation of the actual DOM, to efficiently manage and update the UI of a web application. The virtual DOM is used to minimize the number of changes required to update the actual DOM, resulting in faster and more efficient web applications.

## JSX

JSX is a syntax extension used in React that allows developers to write HTML-like code in JavaScript files. JSX provides a more concise syntax for defining React elements and makes it easier to build and maintain user interfaces. Under the hood, JSX is transformed into regular JavaScript functions that create and return React elements. Using JSX is optional in React, but it has become a widely adopted convention because of its simplicity and readability.

## Props
In React, props (short for "properties") are a way to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component. They are commonly used to customize the behavior or appearance of a component, and can be any type of data. To pass props from a parent component to a child component, the parent component simply includes the props as attributes in the child component's JSX tag. The child component can then access these props as properties of the props object.
```function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Welcome name="Arti" />;
```

## state
In React, state is an object that represents the current condition or state of a component. Here's an example of how state can be used in a React component:
```import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
In this example, the Counter component uses the useState hook to define a state variable count with an initial value of 0. The component also defines an increment function that updates the state variable by calling the setCount function with a new value.

The Counter component renders a div with a p element that displays the current value of count, and a button element that calls the increment function when clicked. Each time the increment function is called, the state variable count is updated and the component re-renders with the new value, updating the user interface to reflect the new state.

## Hooks
In React, hooks are functions that allow developers to use state and other React features in functional components. Here's an example of how the useState hook can be used in a React component:
```import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```