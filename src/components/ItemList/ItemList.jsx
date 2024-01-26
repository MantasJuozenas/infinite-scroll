/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FavouritesContext } from '../../store/FavouritesContext';
import Item from '../item/Item';
import { LoadingH1, MainContainer } from './ItemList.styled';

function ItemList({ data, loading }) {
  const { getFavourites, updateFavourites } = useContext(FavouritesContext);

  const findPictureById = (obj, id) => {
    console.log('bin here');
    return obj?.filter((pictureObj) => pictureObj.id === id);
  };

  const handleClick = (id) => {
    console.log(id);
    if (findPictureById(getFavourites(), id)?.length === 1) {
      updateFavourites(getFavourites().filter((picture) => picture.id !== id));
    } else {
      console.log('here');
      const picturesFound = findPictureById(data.photos, id);
      if (getFavourites()) {
        updateFavourites([...getFavourites(), picturesFound[0]]);
      } else {
        updateFavourites(picturesFound);
      }
    }
  };

  return (
    <>
      <MainContainer data-testid="itemlist">
        {Array.isArray(data.photos) ? (
          data.photos.map((item) => {
            return (
              <Item
                key={item.id + Math.random(1)}
                data={item}
                onclick={handleClick}
                favourited={findPictureById(getFavourites(), item.id)}
              />
            );
          })
        ) : (
          <Item
            key={data.id}
            data={data}
            onclick={handleClick}
            favourited={findPictureById(getFavourites(), data.id)}
          />
        )}
      </MainContainer>
      {(loading || !data) && <LoadingH1>Loading... Please wait</LoadingH1>}
    </>
  );
}

export default ItemList;
