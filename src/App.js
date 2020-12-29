import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './pages/About';

import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
    </BrowserRouter>
  );
};

export default App;