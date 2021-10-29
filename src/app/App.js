/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import AllShops from '../features/allShops/AllShops';
import FavoriteShops from '../features/favoriteShops/FavoriteShops';
import Header from '../components/Header';

function App() {
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
  );
}

export default App;
