import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Email"
          />
          <Form.Control
            className="mt-3"
            placeholder="Password"
          />
          <Row className = "d-flex justify-content-between mt-3 pl-2 pr-3">
            <div className="mt-2">
              New user? 
              <NavLink to = {REGISTRATION_ROUTE}>Create an account</NavLink>
            </div>
            <Button variant={"outline-primary"}>
              Login
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
