import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router";


class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            patronymic: '',
            password: '',
            fireRedirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('/users/registration/', {
            "user": {
                "name": this.state.name,
                "surname": this.state.surname,
                "patronymic": this.state.patronymic,
                "email": this.state.email,
                "password": this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            // на случай успеха
            const cookies = new Cookies();
            cookies.set('token', res.data.user.token, { path: '/' });
            this.setState({ fireRedirect: true })
        }).catch((error) => {
            console.log(error)
            // на случай ошибки(отсуствия токена)
        })
    }
    render() {
        const { fireRedirect } = this.state
        return (
            <div className="registration">
                <div className="wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Фамилия:
                            <input class="textInput" type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                        </label>
                        <label>
                            Имя:
                            <input class="textInput" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Отчество:
                            <input class="textInput" type="text" name="patronymic" value={this.state.patronymic} onChange={this.handleChange} />
                        </label>
                        <label>
                            E-mail:
                            <input class="textInput" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label>Пароль:
                            <input class="textInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                        <input className="submitButton" type="submit" value="Вход" />
                        {fireRedirect && (
                            <Redirect to={'/'} />
                        )}
                    </form>
                </div>
            </div>
        )
    };
}

export default Registration;
