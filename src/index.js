/**
 * SimpleReact - A minimal React-like library
 * Core features: Component-based UI, JSX support, Virtual DOM rendering
 */

// Create a virtual DOM element
function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.flat().map(child =>
      typeof child === 'object' ? child : createTextElement(child)
    ),
  };
}

// Create a text element
function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {nodeValue: text},
    children: [],
  };
}

// Render virtual DOM to real DOM
function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  // Set properties
  const isProperty = key => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  // Recursively render children
  element.children.forEach(child => render(child, dom));

  container.appendChild(dom);
}

// Component class for class-based components
class Component {
  constructor(props) {
    this.props = props;
  }

  setState(partialState) {
    this.state = Object.assign({}, this.state, partialState);
    // In a real implementation, this would trigger a re-render
    console.log('State updated:', this.state);
  }
}

// Export the API
const SimpleReact = {
  createElement,
  render,
  Component,
};

export default SimpleReact;
export {createElement, render, Component};
