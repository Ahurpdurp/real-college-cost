import React, { Component } from 'react';
import axios from 'axios'
import { setAuthenticationHeader } from './utils/Authenticate'

class Login extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      message:''
    }
  }

  handleLoginClick = () => {
    axios.post('http://localhost:8080/login',{
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      let token = response.data.token
      localStorage.setItem('jsonwebtoken',token)
      setAuthenticationHeader(token)
      if(token){
        this.props.history.push('/');
      }
      else{
        this.setState({
          message:response.data.message
        })
      }
    })

  }

  handleTextBoxChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })

  }

    render() {
      return (
        <div>
          {this.state.message}
        <input name="username" onChange={this.handleTextBoxChange} placeholder='login'></input>
        <input name="password" onChange={this.handleTextBoxChange} placeholder='password'></input>
        <button onClick={this.handleLoginClick}>Login</button>
        </div>

      )
    }
}

export default Login
