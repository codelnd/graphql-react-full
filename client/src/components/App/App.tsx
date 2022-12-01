import React, { useEffect, useState } from "react";
import { Input, Form, Button, Row, Col } from "antd";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../query/query";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState<any[]>([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const createUser = () => {};

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  return (
    <div className="App">
      <Form>
        <Row justify="center">
          <Col xs={6}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={6}>
            <Input
              value={age}
              onChange={(e: any) => setAge(e.target.value)}
            ></Input>
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
          <ul key={el.id}>
            <li>{`Id пользователя: ${el.id}. Имя: ${el.username}. Возраст: ${el.age}`}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
