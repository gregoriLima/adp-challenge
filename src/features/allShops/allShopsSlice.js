import { selectSearchTerm } from '../searchTerm/searchTermSlice';
import fetchShops from '../../services/index';

export const loadDataMiddleware = (storeAPI) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  return next(action);
};

export const loadData = (sortBy) => async (dispatch, getState) => {
  const allShopsData = await fetchShops(sortBy);

  dispatch({ type: 'allShops/loadData', payload: allShopsData });
};

const initialState = [];
export const allShopsReducer = (allShops = initialState, action) => {
  switch (action.type) {
    case 'allShops/loadData':
      return action.payload;
    case 'favoriteShops/addShop':
      return allShops.filter((shop) => shop.id !== action.payload.id);
    case 'favoriteShops/removeShop':
      return [...allShops, action.payload];
    default:
      return allShops;
  }
};

export const selectAllShops = (state) => state.allShops;

export const selectFilteredAllShops = (state) => {
  const allShops = selectAllShops(state);
  const searchTerm = selectSearchTerm(state);

  return allShops.filter((shop) => shop.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
