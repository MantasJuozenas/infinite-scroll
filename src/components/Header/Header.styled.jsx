import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeadContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const HeadLinkText = styled(Link)`
  padding-top: 30px;
  color: black;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  font-size: 20px;

  &:hover {
    color: #0000008e;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
