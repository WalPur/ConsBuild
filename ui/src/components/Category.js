import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoryPage({ match }) {
  const [category, setCategory] = useState([]);
  const [lots, setLot] = useState([]);
  const id = match.params.id;

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/category/${id}`
    }).then(response => {
      setCategory(response.data)
      setLot(response.lost.data)
    })
  }, [id])
  return (
    <div className="App">
      <h3>Категория {category.id}</h3>
      {lots.map(l => (
        <p>{l.id}.{l.name}</p>
      ))}
    </div>
  );
}

export default CategoryPage;
