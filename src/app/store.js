// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { favoriteShopsReducer } from '../features/favoriteShops/favoriteShopsSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
import { allShopsReducer, loadDataMiddleware } from '../features/allShops/allShopsSlice';

const middlewareEnhancer = applyMiddleware(loadDataMiddleware);

const store = createStore(combineReducers({
  favoriteShops: favoriteShopsReducer,
  searchTerm: searchTermReducer,
  allShops: allShopsReducer,
}), middlewareEnhancer);

export default store;
