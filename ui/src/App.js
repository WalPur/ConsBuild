import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import NavBar from "./components/navbar";
import Category from './components/category-page';
import Home from "./components/Home";
import Build from './components/build';

import './components/styles/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/build/:square/:floors' exact component={Build} />
          <Route path='/build/:square/:floors/:id/' exact component={Build} />
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
