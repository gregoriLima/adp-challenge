import React from 'react';

import { AllShops } from '../features/allShops/AllShops.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteShops } from '../features/favoriteShops/FavoriteShops.js';

import adpLogo from '../assets/ADP_Logo.png';

export function App() {
  return (
    <main>
      <section>
        <header className='cabecalho container'>
          <img src={adpLogo} alt="adp-logo" className="header-logo" />
          <SearchTerm />
        </header>
      </section>
      <section>
        <h2>Favorite Shops</h2>
        <FavoriteShops />
      </section>
      <hr />
      <section>
        <h2>
          <label for="select1">Top Five Ice Cream Shops in Alpharetta by </label>

          <select name="select1" className="form-control">

            <option value="rating" key={123} >ratings</option>

            <option value="review_count" key={321} >reviews</option>

          </select>
        </h2>

        <AllShops />
      </section>
    </main>
  )
}