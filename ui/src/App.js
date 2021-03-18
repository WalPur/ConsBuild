import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import NavBar from "./components/navbar";
import Category from './components/category-page';
import CategoryPage from './components/Category';
import Home from "./components/Home";

import './components/styles/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/category/:id' exact component={CategoryPage} />
          <Route path='/categories' exact component={Category} />
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
