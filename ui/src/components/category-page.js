import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/category/"
    }).then(response => {
      setCategory(response.data)
    })
  }, [])
  return (
    <div className="App">
      {category.map(c => (
        <Link className="Category" to={{pathname: `/categories/${c.id}`, fromDashboard: false}}>{c.name}</Link>
      ))}
    </div>
  );
}

export default Category;
