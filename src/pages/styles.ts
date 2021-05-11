import styled from 'styled-components';

export const GridItem = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 50px;
`;

export const GridContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 40px;
`;
