import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
  display: grid;
  grid-template-columns: ${(props) => (props.loading ? '1fr' : 'repeat(3, 1fr)')};
  gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
`;
