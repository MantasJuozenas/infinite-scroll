import React from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { FavouritesContext } from '../../store/FavouritesContext';
import { Container } from '../MainPage/MainPage.styled';
import { NoFavouritedPictures } from './FavouritedPage.styled';
import { useContext } from 'react';
import { useEffect } from 'react';

function FavouritedPage() {
  const { getFavourites, updateFavourites } = useContext(FavouritesContext);

  useEffect(() => {
    const FavouritedPictures = JSON.parse(localStorage.getItem('FavouritedPictures'));
    if (FavouritedPictures) {
      updateFavourites(FavouritedPictures);
    }
  }, []);

  return (
    <Container data-testid="MainPage">
      {getFavourites()?.length > 0 ? (
        <ItemList data={{ photos: getFavourites() }} />
      ) : (
        <NoFavouritedPictures>
          Sorry you do not have any favourited images, if you want to see a full list go to all
          pictures section
        </NoFavouritedPictures>
      )}
    </Container>
  );
}

export default FavouritedPage;
