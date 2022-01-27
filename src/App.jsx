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
      user: "",
      tag: "",
    };
  }

  updateState() {
    let obj = client.rank(this.state.user, this.state.tag);
    obj.then((value) => {
      this.setState({ tier: value.data });
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>

        {/*<div style={{ paddingTop: "100px" }}>
          <Button onClick={() => this.updateState()}>Click Here!</Button>
          </div>
          */}

        <div style={{ paddingTop: "60px" }}>
          <Form>
            <Form.Group className="mb-3" style={{ width: "300px" }}>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                value={this.state.user}
                placeholder="Username"
                onChange={(e) => this.setState({ user: e.target.value })}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: "300px" }}>
              <Form.Label>Tag:</Form.Label>
              <Form.Control
                value={this.state.tag}
                placeholder="tag"
                onChange={(e) => this.setState({ tag: e.target.value })}
              ></Form.Control>
            </Form.Group>

            <Button variant="outline-light" onClick={() => this.updateState()}>
              Submit
            </Button>
          </Form>
        </div>

        <div>
          <RankDisplay tier={this.state.tier} />
        </div>
      </div>
    );
  }
}