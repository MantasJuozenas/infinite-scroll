import styled from 'styled-components';

export const ItemTextDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  visibility: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
  transition: 0.2s all;
`;

export const ItemDiv = styled.div`
  width: 100%;
  position: relative;
  height: 280px;

  &:hover ${ItemTextDiv} {
    opacity: 1;
    visibility: visible;
    background-color: #00000076;
    border-radius: 5px;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 5px;
`;

export const ItemText = styled.p`
  color: white;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  height: ${(props) => props.imgName && '50px'};
  font-weight: ${(props) => props.imgName && '600'};
`;

export const HrDiv = styled.div`
  background-color: #fff;
  width: 20%;
  height: 4px;
  border-radius: 5px;
`;

export default ItemImage;
