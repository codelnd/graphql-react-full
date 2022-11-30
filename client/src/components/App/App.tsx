import React, { useState } from "react";
import { Input, Form, Button, Row, Col } from "antd";

function App() {
  const [users, setUsers] = useState<any[]>([]);

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
      <div>
        {users.map((el) => (
          <ul>
            <li
              key={el.id}
            >{`Id пользователя: ${el.id}. Имя: ${el.username}. Возраст: ${el.age}`}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
