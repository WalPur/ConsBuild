import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Login from './auth components/login';
import { Redirect } from "react-router";

function Profile() {
    var user = null;
    const cookies = new Cookies();
    const token = cookies.get('token');
    const [content, setContent] = useState(``);
    useEffect(() => {
        axios.get('/users/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // на случай успеха
            cookies.set('token', res.data.user.token, { path: '/' });
            user = res.data.user;
            setContent(
                <div className='content'>
                    <h1 className='welcome'>Личный кабинет</h1>
                    <p>Имя: {user.name}</p>
                    <p>Фамилия: {user.surname}</p>
                    <p>Email: {user.email}</p>
                    <Link to={{ pathname: `/logout`, fromDashBoard: false }}><button>Выйти</button></Link>
                    {/* <Link to={{ pathname: `/patch`, fromDashBoard: false }}><button>Изменить данные</button></Link> */}
                </div>
            )
        }).catch((error) => {
            // На случай ошибки
            setContent(
                <div className='logChoose'>
                    <Link className='chooseButton' to={{ pathname: `/login`, fromDashBoard: false}}>Войти</Link>
                    <Link className='chooseButton' to={{ pathname: `/reg`, fromDashBoard: false}}>Регистрация</Link>
                </div>
            )
        })
    }, [])
    return (
        <div className="userPage">
            <div className="wrapper">
                { content }
            </div>
        </div>
    )
}

export default Profile;
