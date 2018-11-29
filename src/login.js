import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameOrEmail: '',
      password: '',
      isLogged: false
    }
    this.cambiosInput = this.cambiosInput.bind(this)
    this.boton = this.boton.bind(this)
  }
  cambiosInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
    // console.log(value);
    // console.log(name);
    // console.log(this.state);
  }
  boton(e) {
    e.preventDefault();
    const usernameOrEmail = this.state.usernameOrEmail;
    const password = this.state.password;
    const data = {
      usernameOrEmail,
      password
    }
    axios.post('http://localhost:5000/api/auth/signin', data)
      .then(res => {
        // console.log(res);
        // console.log(this.data.json);
        console.log(res);
        if (res.status === 200) {
          alert("ok")
        }

      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    if (this.state.isLogged) {
      return this.props.history.push('/home')
    }
    return (
      <div className="App">
        <form onSubmit={this.boton}>
          <input
            type="text"
            value={this.state.usernameOrEmail}
            onChange={this.cambiosInput}
            name="usernameOrEmail" />
          <br />
          <br />
          <input
            type="text"
            value={this.state.password}
            onChange={this.cambiosInput}
            name="password" />
          <br />
          <br />
          <button>
            Aceptar
        </button>
        </form>
      </div>
    );
  }
}

export default Login;
