import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation()
  console.log(location)
  let isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Email"
          />
          <Form.Control
            className="mt-3"
            placeholder="Password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-2 pr-3">
            {isLogin ?
              <div className="mt-2">
                New user?
                <NavLink to={REGISTRATION_ROUTE}>Create an account</NavLink>
              </div>
              :
              <div>
                You are already user?<NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            }
            <Button variant={"outline-primary"}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
}

export default Auth;