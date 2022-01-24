import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/layout/Nav';

import client from './utilities/api/client';

function App() {

  let resultAns = client.home()
  let rank = client.rank()
  console.log(resultAns)

  return (
    <div className="App">
      <Nav />
      <h1></h1>
    </div>
  );
}

export default App;