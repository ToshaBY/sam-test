import React, { ReactElement } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

export const Header = (): ReactElement => {
  return (
    <Wrapper>
      <div>Header</div>
    </Wrapper>
  );
};
