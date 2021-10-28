/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addShop } from '../favoriteShops/favoriteShopsSlice.js';
import { loadData, selectFilteredAllShops } from './allShopsSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Shop from "../../components/Shop";

import favoriteIconURL from "../../assets/favorite.svg"

import './all-shops.scss'

export const AllShops = () => {
  const allShops = useSelector(selectFilteredAllShops);

  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData);
  }

  useEffect(onFirstRender, []);

  const onAddShopHandler = (shop) => {
    dispatch(addShop(shop));
  };

  return (
    <div className="shops-container">
      {allShops.map((shop) => (
        <Shop shop={shop} key={shop.id}>
          <FavoriteButton
            onClickHandler={() => onAddShopHandler(shop)}
            icon={favoriteIconURL}
            favorite={true}
          >
            Add to Favorites
          </FavoriteButton>
        </Shop>
      ))}
    </div>
  );
};


