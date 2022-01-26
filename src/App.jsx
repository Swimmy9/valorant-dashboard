import React from 'react';
import './App.css';
import Nav from './components/layout/Nav';
import RankDisplay from './components/layout/rank';
import { Button } from 'react-bootstrap';

import client from './utilities/api/client';

// let resultAns = client.home();
// let rank = client.rank();
// console.log(resultAns);

export default class App extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
      tier: null,
    };
  }
  
  updateState() {
    console.log("yo");
    let obj = (client.rank())
    obj.then(value => {
      this.setState({ tier: value.data});
    }
    )
    
  }

  render () {
    return (
      <>
        <div className="App">
          <Nav />
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Button onClick={() => this.updateState()}>Click Here!</Button>
        </div>
        <div>
          <RankDisplay tier={this.state.tier} />
        </div>
      </>
    );
  }
}