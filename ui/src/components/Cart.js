import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/lot.css';
import Cookies from 'universal-cookie';

function Cart() {
    var lot = [];
    const cookies = new Cookies();

    if (cookies) {
        var cookie = cookies.get('Cart')
        for (let id = 0; id < cookie.length; id++){
            var num = '';
            while (cookie[id] != '.') {
                num += cookie[id];
                id++;
            }
            axios({
                method: "GET",
                url: `http://consbuild.pythonanywhere.com/api/lot/${num}/`
            }).then(response => {
                lot.push(response.data)
            })
        }
    }
    return(
        <div className="lot">
            {lot.map(l => (
                <div className='lot'>
                    <div className="desc">
                        <Link className='lotTitle Title'>{l.name}</Link>
                        <Link className="shopTitle Title">Продавец: {l.shop}</Link>
                        <div className="lotDesc">
                            Материал: {l.material}. Назначение: {l.purpose}.
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )};
    export default Cart;