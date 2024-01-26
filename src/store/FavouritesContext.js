import { useState } from 'react';
import { createContext } from 'react';

// sukuriam context
// argumentai tik autocompletina
export const FavouritesContext = createContext({
  getFavourites() {},
  updateFavourites() {}
});

FavouritesContext.displayName = 'FavouritesContext';

function FavouritesProvider(props) {
  const [allFavourites, setAllFavourites] = useState([]);

  function getFavourites() {
    return allFavourites;
  }

  function updateFavourites(pictures) {
    localStorage.setItem('FavouritedPictures', JSON.stringify(pictures));
    setAllFavourites(pictures);
  }

  const ctx = {
    getFavourites,
    updateFavourites
  };
  return <FavouritesContext.Provider value={ctx}>{props.children}</FavouritesContext.Provider>;
}

export default FavouritesProvider;
