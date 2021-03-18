import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoryPage(id) {
    const [lot, setLot] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/category/${id}`
        }).then(response => {
            setLot(response.lots.data)
        })
    }, [id])
    console.log(`http://127.0.0.1:8000/api/category/${id}`)
    return(
        <div className="App">
            {lot.map(l => (
                <p>{l.id}.{l.name}</p>
            ))}
        </div>
    );
}

export default CategoryPage;
