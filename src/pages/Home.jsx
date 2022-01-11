import React, { useEffect } from "react";
import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(category, sortBy);

  useEffect(() => {
    dispatch(fetchPizzas);
  }, [category]);

  const onSelectCategory  = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    []
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} //from redux
                    onClickCategory={onSelectCategory}
                    items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded &&
          items.map((obj) => (
            <PizzaBlock
              key={obj.id}
              {...obj}
              isLoading={true}
            />
          ))}
        {!isLoaded &&
          Array(10)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
