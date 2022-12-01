import React, { useEffect, useState } from "react";
import { Input, Form, Button, Row, Col } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_USER } from "../../query/query";
import { CREATE_USER } from "../../mutations/mutations";

function App() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  const {
    data: user,
    loading: loadingUser,
    refetch: refetchUser,
  } = useQuery(GET_USER, {
    variables: {
      id: 1,
    },
  });
  const [createdUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState<any[]>([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const getAllUsers = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const getUser = (e: React.FormEvent) => {
    e.preventDefault();
    refetchUser();
    console.log(user.getUser);
  };

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();
    createdUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(({ data }) => {
      console.log(data);
      setUsername("");
      setAge(0);
    });
  };

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
              onChange={(e: any) => setAge(+e.target.value)}
            ></Input>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={3}>
            <Button onClick={createUser} type="primary">
              Создать пользователя
            </Button>
          </Col>
          <Col xs={3}>
            <Button onClick={getAllUsers} type="primary">
              Получить пользователей
            </Button>
          </Col>
          <Col xs={3}>
            <Button onClick={getUser} type="primary">
              Получить пользователя
            </Button>
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
