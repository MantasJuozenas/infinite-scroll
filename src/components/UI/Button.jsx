import React from 'react';
import { FavButton } from './Button.styled';

function Button({ dataTestId, onclick, children }) {
  return (
    <FavButton data-testid={dataTestId} onClick={onclick}>
      {children}
    </FavButton>
  );
}

export default Button;
