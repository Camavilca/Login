import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class Registro extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            bien: false
        }
        this.cambiosInput = this.cambiosInput.bind(this)
        this.registro = this.registro.bind(this)
    }
    cambiosInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }
    registro(e) {
        e.preventDefault();
        const name = this.state.name;
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;
        const data = {
            name,
            username,
            email,
            password
        }
        axios.post('http://localhost:5000/api/auth/signup', data)
            .then(res => {
                console.log(res);

            })
            .catch(err => {
                console.log(err);

            })
        this.setState({ bien: true });
    }
    render() {
        if(this.state.bien){
            return (<Redirect to="/"/>)
          }
        return (
            <div>
                <form onSubmit={this.registro}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.cambiosInput}
                        placeholder="nombre completo" />
                    <br />
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.cambiosInput}
                        placeholder="usuario" />

                    <br />
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.cambiosInput}
                        placeholder="email" />
                    <br />
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.cambiosInput}
                        placeholder="contraseña" />
                    <br />
                    <br />
                    <button>
                        Aceptar
                    </button>
                </form>
            </div>
        )
    }
}
export default Registro;