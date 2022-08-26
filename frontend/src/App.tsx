import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';
import Header from './core/header';

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes />
   </BrowserRouter>
  );
}

export default App;
