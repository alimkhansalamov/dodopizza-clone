import React, { useEffect, useState } from "react";
import { Header } from "./components"
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';


function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
      fetch
      ('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => setPizzas(json.pizzas))
    }
    , []);


  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <Route path="/" render={() => <Home items={pizzas} />} exact>
      </Route>
      <Route path="/cart" component={Cart} exact>
      </Route>
      </div>
    </div>)
}

export default App;
