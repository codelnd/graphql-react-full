import React from "react";
import { Input, Form, Button, Row, Col } from "antd";

function App() {
  return (
    <div className="App">
      <Form>
        <Row justify="center">
          <Col xs={6}>
            <Input></Input>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={6}>
            <Input></Input>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={3}>
            <Button type="primary">Создать пользователя</Button>
          </Col>
          <Col xs={3}>
            <Button type="primary">Получить пользователей</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default App;
