import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addShop } from '../favoriteShops/favoriteShopsSlice';
import { loadData, selectFilteredAllShops } from './allShopsSlice';
import FavoriteButton from '../../components/FavoriteButton';
import Shop from '../../components/Shop';
import Select from '../../components/Select';

import favoriteIconURL from '../../assets/favorite.svg';

import './all-shops.scss';

const AllShops = () => {
  const allShops = useSelector(selectFilteredAllShops);

  const [sortBy, setSortBy] = useState('rating');

  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData(sortBy));
  };

  useEffect(onFirstRender, [sortBy]);

  const onAddShopHandler = (shop) => {
    dispatch(addShop(shop));
  };

  const handleSelectChange = (value) => {
    setSortBy(value);
  };

  return (
    <>
      <Select sortBy={sortBy} onChange={handleSelectChange} />
      <div className="shops-container">
        {allShops.map((shop) => (
          <Shop shop={shop} key={shop.id}>
            <FavoriteButton
              onClickHandler={() => onAddShopHandler(shop)}
              icon={favoriteIconURL}
              // eslint-disable-next-line react/jsx-boolean-value
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

export default AllShops;
