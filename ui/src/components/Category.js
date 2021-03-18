import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/lot.css';

function CategoryPage(id) {
    const [lot, setLot] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/category/${id}/`
        }).then(response => {
            setLot(response.data.lots)
        })
    }, [id])
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
                        <input type="button" className="buyButton addButton" value="В корзину" />
                        <input type="button" className="favButton addButton" value="В избранное" />
                    </div>
                </div>
            ))}
        </div>
    )};
    export default CategoryPage;