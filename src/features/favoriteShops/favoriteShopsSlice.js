import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const initialState = [];
export const favoriteShopsReducer = (favoriteShops = initialState, action) => {
  switch (action.type) {
    case 'favoriteShops/addShop':
      return [...favoriteShops, action.payload]
    case 'favoriteShops/removeShop':
      return favoriteShops.filter(shop => shop.id !== action.payload.id)
    default:
      return favoriteShops;
  }
}

export function addShop(shop) {
  return {
    type: 'favoriteShops/addShop',
    payload: shop
  }
}

export function removeShop(shop) {
  return {
    type: 'favoriteShops/removeShop',
    payload: shop
  }
}

export const selectFavoriteShops = (state) => state.favoriteShops;

export const selectFilteredFavoriteShops = (state) => {
  const favoriteShops = selectFavoriteShops(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteShops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};