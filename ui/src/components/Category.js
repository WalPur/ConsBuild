import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/lot.css';
import Cookies from 'universal-cookie';

function CategoryPage(id) {
    const [lot, setLot] = useState([]);
    const cookies = new Cookies();

    function gotCart(id) {
        var old = cookies.get('Cart');
        if (!old) {
            old = '';
        }
        cookies.set('Cart', old + id + '.', { path: '/' });
    }
    function gotFav(id) {
        var old = cookies.get('Fav');
        if (!old) {
            old = '';
        }
        cookies.set('Fav', old + id + '.', { path: '/' });
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://consbuild.pythonanywhere.com/api/category/${id}/`
        }).then(response => {
            setLot(response.data.lots)
        })
    }, [id])
    console.log(lot)
    return(
        <div className="lots">
            {lot.map(l => (
                <div className='lot'>
                    <div className="desc">
                        <Link className='lotTitle Title'>{l.name}</Link>
                        <Link className="shopTitle Title">Продавец: {l.shop}</Link>
                        <div className="lotDesc">
                            Материал: {l.material}. Назначение: {l.purpose}.
                        </div>
                    </div>
                    <div className='variants'>
                        <input type="button" className="buyButton addButton" onClick={gotCart(l.id)} value="В корзину" />
                        <input type="button" className="favButton addButton" onClick={gotFav(l.id)} value="В избранное" />
                    </div>
                </div>
            ))}
        </div>
    )};
    export default CategoryPage;