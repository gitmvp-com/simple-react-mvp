# SimpleReact MVP

> A simplified MVP version of [React](https://github.com/facebook/react) - demonstrating core component-based rendering with JSX

## Overview

This project is a minimal implementation of React's core concepts, built to understand and demonstrate:

- **Component-Based Architecture**: Build encapsulated components that manage their own rendering
- **JSX Support**: Write HTML-like syntax in JavaScript, transformed via Babel
- **Virtual DOM**: Create lightweight JavaScript representations of UI elements
- **Declarative Rendering**: Describe what the UI should look like, not how to build it

## Key Features

✅ **JSX Transformation** - Uses Babel to transform JSX syntax into JavaScript function calls  
✅ **createElement API** - Creates virtual DOM elements similar to React  
✅ **render Function** - Converts virtual DOM to real DOM elements  
✅ **Component Class** - Base class for building components (simplified)  
✅ **No External Dependencies** - Pure implementation using standard build tools  

## Installation

```bash
# Clone the repository
git clone https://github.com/gitmvp-com/simple-react-mvp.git
cd simple-react-mvp

# Install dependencies
npm install

# Build the library
npm run build

# Serve the example
npm run serve
```

Then open `http://localhost:3000/example/` in your browser.

## How It Works

### 1. JSX Transformation

Babel transforms JSX into `createElement` calls:

```jsx
// JSX syntax
const element = <div>Hello World</div>;

// Transforms to:
const element = SimpleReact.createElement('div', null, 'Hello World');
```

### 2. Virtual DOM Creation

The `createElement` function creates a virtual DOM object:

```javascript
{
  type: 'div',
  props: {},
  children: [
    { type: 'TEXT_ELEMENT', props: { nodeValue: 'Hello World' }, children: [] }
  ]
}
```

### 3. Rendering to Real DOM

The `render` function converts the virtual DOM to real DOM elements:

```javascript
SimpleReact.render(element, document.getElementById('root'));
```

## API Reference

### `createElement(type, props, ...children)`

Creates a virtual DOM element.

- **type**: String (HTML tag) or Component class
- **props**: Object of properties/attributes
- **children**: Child elements or text

### `render(element, container)`

Renders a virtual DOM element to a real DOM container.

- **element**: Virtual DOM element created by `createElement`
- **container**: Real DOM node to render into

### `Component`

Base class for creating components (simplified version).

## Project Structure

```
simple-react-mvp/
├── src/
│   └── index.js           # Core SimpleReact implementation
├── example/
│   └── index.html         # Demo application
├── dist/
│   └── simple-react.js    # Built bundle
├── package.json           # Dependencies (matching React's versions)
├── rollup.config.js       # Rollup bundler configuration
├── babel.config.js        # Babel configuration for JSX
└── README.md
```

## Differences from Full React

This MVP focuses on core concepts and **intentionally omits**:

- ❌ Hooks (useState, useEffect, etc.)
- ❌ Advanced reconciliation/diffing algorithm
- ❌ Fiber architecture
- ❌ Event system
- ❌ State management and re-rendering
- ❌ Context API
- ❌ Suspense and lazy loading
- ❌ Server-side rendering

## Configuration

This project uses the same build tools and versions as React:

- **Babel**: ^7.11.1 (JSX transformation)
- **Rollup**: ^3.29.5 (Module bundling)
- **@babel/plugin-transform-react-jsx**: ^7.23.4 (JSX plugin)

## Learning Resources

To understand more about React's internals:

- [React Documentation](https://react.dev/)
- [Build Your Own React](https://pomb.us/build-your-own-react/)
- [React Source Code](https://github.com/facebook/react)

## License

MIT License - feel free to use this for learning and experimentation!

## Credits

Inspired by [React](https://github.com/facebook/react) by Facebook. This is an educational project to demonstrate React's core concepts in a simplified form.
