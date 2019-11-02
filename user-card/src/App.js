import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

import UserList from './components/UserList'
import './App.css'

export default class App extends Component {

  state = { users: [], usersText: '' }

  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then(res => {
        const users = res.data
        this.setState({ users })
      })
      .catch(err => console.log(err))
  }




  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <h1>Github Users</h1>
        <Form className="github-form">
          <Form.Field>
            <label>
              Users
              <input />
            </label>
          </Form.Field>
        </Form>
        <Button primary>Search Users</Button>
        <UserList users={this.state.users} />
      </div>
    );
  }
}