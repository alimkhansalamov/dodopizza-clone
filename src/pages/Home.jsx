import React, { useEffect } from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {setCategory} from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые"

]
const sortItems = [
  {name: "популярности", type: "popular"},
  { name: "цене", type: 'price', },
  { name:"алфавиту", type: "alphabet", }];


const Home = () => {
const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);

  useEffect(() => {
      dispatch(fetchPizzas)
    }
    , [dispatch]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {
          items.map((obj) =>

            <PizzaBlock key={obj.id} {...obj}/>
          )
        }


      </div>
    </div>
  );
};

export default Home;
