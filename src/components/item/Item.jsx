/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../UI/Button';
import ItemImage, { HrDiv, ItemDiv, ItemText, ItemTextDiv } from './Item.styled';

function Item({ data, favourited, onclick }) {
  return (
    data && (
      <ItemDiv data-testid="item">
        <ItemImage src={data?.src?.large} alt={data?.alt} />
        <ItemTextDiv data-testid="itemDiv">
          <ItemText imgName="true" data-testid="imgName">
            {data?.alt}
          </ItemText>
          <HrDiv />
          <ItemText data-testid="authorName">{data?.photographer}</ItemText>
          <Button dataTestId="favouriteButton" onclick={() => onclick(data?.id)}>
            {favourited?.length === 1 ? 'Favourited' : 'Favourite'}
          </Button>
        </ItemTextDiv>
      </ItemDiv>
    )
  );
}

export default Item;
