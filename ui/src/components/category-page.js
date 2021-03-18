import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/categoryList.css';
import { NavLink } from 'react-router-dom';


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
    <div className="Categories">
      <span className="CategoriesTitle">Категории:</span>
      <ol>
        {category.map(c => (
          <li><NavLink className="Category" activeClassName="CategoryA" to={{pathname: `${c.id}`, fromDashboard: false}}>{c.name}</NavLink></li>
        ))}
      </ol>
    </div>
  );
}

export default Category;
