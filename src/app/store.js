import { createStore, combineReducers, applyMiddleware } from 'redux';
import { favoriteShopsReducer } from '../features/favoriteShops/favoriteShopsSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
import { allShopsReducer, loadDataMiddleware } from '../features/allShops/allShopsSlice.js';


const middlewareEnhancer = applyMiddleware(loadDataMiddleware);

export const store = createStore(combineReducers({
  favoriteShops: favoriteShopsReducer,
  searchTerm: searchTermReducer,
  allShops: allShopsReducer
}), middlewareEnhancer);