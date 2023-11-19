import React from 'react'
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MainTitle = (props) => {
  return (
    <Title>{props.children}</Title>
  )
}

export default MainTitle