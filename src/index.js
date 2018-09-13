import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React for Kids!</h1>
      <p>
        This is a playground app for the use and testing of React components to
        be used by kids to build super neat apps!
      </p>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
