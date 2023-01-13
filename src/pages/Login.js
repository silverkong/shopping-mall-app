import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col } from "react-bootstrap";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    // form이 submit을 할 때, 자동으로 새로고침 되는 것을 방지
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <Col lg={4} className="wrap-login-form">
        <h3 className="mb-4">로그인</h3>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="input-login"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="input-login"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </Form.Group>
          <Button className="btn-login-form" type="submit">
            로그인
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Login;
