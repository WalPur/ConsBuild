import Category from "./category-page";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/build.css';
// import CategoryPage from './Category'

function CategoryPage(id) {
    const [category, setCategory] = useState([]);
    const [lot, setLot] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/category/${id}/`
        }).then(response => {
            setCategory(response.data)
            setLot(response.data.lots)
        })
    }, [id])
    return(
        <div className="App">
            {lot.map(l => (
                <p>{l.id}.{l.name}</p>
            ))}
        </div>
    );
}

    function Build({ match }) {
    const Floors = match.params.floors;
    const Square = match.params.square;
    const Category_id = match.params.id;

    function LotsList() {
        if (Category_id) {
            return(CategoryPage(Category_id));
        } else {
            return(null)
        }
    }

  return (
    <div className="Build">
        <Category />
        <div className="main-content">
            <h2>Закупка материалов для {Floors} этажного здания с площадью {Square}м<sup>2</sup></h2>
            <LotsList />
        </div>
    </div>
  );
}

export default Build;
