import React from 'react';
import { HeadContainer, HeadLinkText } from './Header.styled';

function Header({ active }) {
  return (
    <HeadContainer>
      <HeadLinkText active={active === 'all' ? 'true' : ''} to={'/'}>
        All pictures
      </HeadLinkText>
      <HeadLinkText active={active === 'favourited' ? 'true' : ''} to={'/favourited'}>
        Favourited pictures
      </HeadLinkText>
    </HeadContainer>
  );
}

export default Header;
