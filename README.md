# colankit

`colankit` is a simple React UI library.

## Installation

Install the package using npm or yarn:

```bash
npm install @raiyan/colankit
# or
yarn add @raiyan/colankit
```

## Usage

To use `colankit`, you need to wrap your app component with the `ColankitProvider` in your main file (e.g., `main.jsx` or `index.jsx`).

### Wrapping the App Component

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ColankitProvider } from '@raiyan/colankit';
import App from './App';

ReactDOM.render(
  <ColankitProvider>
    <App />
  </ColankitProvider>,
  document.getElementById('root')
);
```

### Using the component

Once you have wrapped your app component with the `NotificationProvider`, you can use the component anywhere inside the app component

```jsx
import React from 'react';
import { Card } from '@raiyan/colankit';

const MyComponent = () => { 
  return (
    <Card onClick={handleClick}>
      Show Notification
    </Card>
  );
};

export default MyComponent;
```
## License

This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License. To view a copy of this license, visit [http://creativecommons.org/licenses/by-nc/4.0/](http://creativecommons.org/licenses/by-nc/4.0/).
