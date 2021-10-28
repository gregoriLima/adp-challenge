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
    <>
      <h2>
        <label for="select1">Top Five Ice Cream Shops in Alpharetta by </label>

        <select name="select1" className="form-control">

          <option value="rating" key={123} >ratings</option>

          <option value="review_count" key={321} >reviews</option>

        </select>
      </h2>
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
    </>
  );
};


