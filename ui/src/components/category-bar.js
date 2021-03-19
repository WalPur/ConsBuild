import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoryBar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://consbuild.pythonanywhere.com/api/category/"
    }).then(response => {
      setCategory(response.data)
    })
  }, [])
  return (
    <div className="App">
      {category.map(c => (
        <Link className="NavBarElement" to={{pathname: `/categories/${c.id}`, fromDashboard: false}}>{c.name}</Link>
      ))}
    </div>
  );
}

export default CategoryBar;
