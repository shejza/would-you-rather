import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveUsers } from '../actions/users';
import { actions as authActions } from './services/actions';
import { Dropdown, Card, Grid, Form, Header } from 'semantic-ui-react'
import { handleInitialData } from './../actions/shared';

const Login = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [usersList, setUsers] = useState([]);

  useEffect(() => {
    dispatch(handleInitialData())
  }, []);
  
  useEffect(() => {
    dispatch(receiveUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!!users) {
      setUsers(users);
    }
  }, [users]);

  const generateDropdownData = () => {

    return Object.values(usersList).map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL }
    }));
  };

  const [value, setValue] = useState('');

  const onChange = (e, { value }) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch((authActions.setAuthUser(value)));
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ width: 650 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Welcome to the Would You Rather App!
        </Header>
        <Form size='large' onSubmit={handleSubmit}>

          <Card style={{ margin: 'auto', width: 400, marginTop: 30 }}>
            <Card.Content>
              <Card.Header style={{ marginBottom: 20 }}>Log in</Card.Header>
              <Card.Meta style={{ marginBottom: 20 }}>Please select a user from the menu</Card.Meta>
              <Dropdown
                placeholder='Select Friend'
                fluid
                selection
                options={generateDropdownData()}
                value={value}
                onChange={onChange}
              />

<Form.Button style={{ marginTop: 20, backgroundColor: "teal" }} content="Login" positive disabled={!value} fluid />
            </Card.Content>
          
          </Card>
        </Form>
      </Grid.Column>
    </Grid>
  )

}

export default Login