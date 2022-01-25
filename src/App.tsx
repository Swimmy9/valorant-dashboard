import React from 'react';
import './App.css';
import Nav from './components/layout/Nav';
import RankDisplay from './components/layout/rank';

import client from './utilities/api/client';

function App() {

  let resultAns = client.home()
  let rank = client.rank()
  console.log(resultAns)

  return (
    <div className="App">
      <Nav />
      <h1>
        <RankDisplay />
        { rank }
      </h1>
    </div>
  );
}

export default App;