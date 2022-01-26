import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Search extends React.Component {

    render() {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username (with tag): </Form.Label>
                    <Form.Control placeholder="Username#tag"></Form.Control>
                </Form.Group>
                <Button variant="outline-dark" onClick={() => this.updateState()}>Submit</Button>
            </Form>
        );
    }
}