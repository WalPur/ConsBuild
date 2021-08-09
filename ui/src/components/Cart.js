import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/lot.css';
import Cookies from 'universal-cookie';

function Cart() {
    var lot = [];
    var content = (null)
    
    // There should be import from user data about lots
    // Or else just a label to say "add something" or idk

    // Some sketch
    if (lot.length != 0) {
        content = 
            lot.map(l => (
                <div className='lot'>
                    <div className="desc">
                        <Link className='lotTitle Title'>{l.name}</Link>
                        <Link className="shopTitle Title">Продавец: {l.shop}</Link>
                        <div className="lotDesc">
                            Материал: {l.material}. Назначение: {l.purpose}.
                        </div>
                    </div>
                </div>
            ))
    } else {
        content = <h2>Добавьте товары</h2>
    }

    return(
        <div className="lot">
            {content}
        </div>
    )};
    export default Cart;