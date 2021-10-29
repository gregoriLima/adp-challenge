import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeShop, selectFilteredFavoriteShops } from './favoriteShopsSlice';
import FavoriteButton from '../../components/FavoriteButton';
import Shop from '../../components/Shop';

import unfavoriteIconUrl from '../../assets/unfavorite.svg';

const FavoriteShops = () => {
  const favoriteShops = useSelector(selectFilteredFavoriteShops);
  const dispatch = useDispatch();

  const onRemoveShopHandler = (shop) => {
    dispatch(removeShop(shop));
  };

  // Helper Function
  function createShopComponent(shop) {
    return (
      <Shop shop={shop} key={shop.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveShopHandler(shop)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Shop>
    );
  }

  return (
    <div className="shops-container">
      {favoriteShops.map(createShopComponent)}
    </div>
  );
};

export default FavoriteShops;
