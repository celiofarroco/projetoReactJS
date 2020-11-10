import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Bar from './components/Bar'
import Routes from './routes/route'


function App() {
  return (
    <BrowserRouter>
      <Bar />
      <Routes />
    </BrowserRouter>
    
  );
}

export default App;