import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Layout/Navbar/Navbar';
import Main from './Layout/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Main} />


      </BrowserRouter>
    </div>
  );
}

export default App;
