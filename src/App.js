import React, { useEffect } from "react";
import { Header } from "./components"
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    axios.get('http://localhost:3001/pizzas').then(({data}) => {

        dispatch(setPizzas(data));
     })
    }
    , [dispatch]);







  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <Route path="/" component={Home} exact>
      </Route>
      <Route path="/cart" component={Cart} exact>
      </Route>
      </div>
    </div>)
}

export default App;
