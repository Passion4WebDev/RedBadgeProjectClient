import React from "react";
import { Container, Row, Col } from "reactstrap";
import Register from "./Register";
import Login from "./Login";

const Auth = (props) => {
  return (
    <>
      <Container>
        <Row>
          {/* <p className="display-1">ExoticSuperCarsXXXX! Dealers Blogs</p> */}
          {/* <p className="subtitleMain">Welcome to your Blog!</p> */}
        </Row>
      </Container>
      <Container className="auth-container">
        <Row>
          <Col md="6.5">
            <Register updateToken={props.updateToken} />
          </Col>
          <Col md="6.5" className="login-col">
            <Login updateToken={props.updateToken} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
