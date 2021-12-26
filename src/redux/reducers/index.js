import {combineReducers} from  'redux'
import filters from './filters'
import pizzas from './pizzas';

const rootReducer = combineReducers({
  filters: filters,
  pizzas: pizzas,
});

export default rootReducer;