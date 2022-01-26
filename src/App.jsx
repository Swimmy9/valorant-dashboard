import React from 'react';
import './App.css';
import Nav from './components/layout/Nav';
import RankDisplay from './components/layout/rank';
import { Button, Form } from 'react-bootstrap';

import client from './utilities/api/client';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tier: null,
      search: null,
    };
  }

  updateState() {
    let obj = (client.rank())
    obj.then(value => {
      this.setState({ tier: value.data });
    }
    )
  }

  render() {
    return (
      <>
        <div className="App">
          <Nav />
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Button onClick={() => this.updateState()}>Click Here!</Button>
        </div>

        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username (with tag): </Form.Label>
              <Form.Control placeholder="Username#tag"></Form.Control>
            </Form.Group>
            <Button variant="outline-dark" onClick={() => this.updateState()}>Submit</Button>
          </Form>
        </div>

        <div>
          <RankDisplay tier={this.state.tier} />
        </div>
      </>
    );
  }
}