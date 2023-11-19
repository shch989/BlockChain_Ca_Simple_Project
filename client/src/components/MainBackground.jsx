import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0ffff;
`;

const OuterBox = styled.div`
  width: 30%;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const MainBackground = (props) => {
  return (
    <Container>
      <OuterBox>
        {props.children}
      </OuterBox>
    </Container>
  )
}

export default MainBackground