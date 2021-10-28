import React from 'react';

import { AllShops } from '../features/allShops/AllShops.js';
import { FavoriteShops } from '../features/favoriteShops/FavoriteShops.js';
import Header from '../components/Header'


export function App() {
  return (
    <main>
      <section>
        <Header />
      </section>
      <section>
        <h2>Favorite Shops</h2>
        <FavoriteShops />
      </section>
      <hr />
      <section>
        <AllShops />
      </section>
    </main>
  )
}