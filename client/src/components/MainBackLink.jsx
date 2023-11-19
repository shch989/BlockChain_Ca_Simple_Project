import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.span`
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #333;

  &:hover {
    color: #4caf50;
  }
`;

const BackMainLink = () => {
  return (
    <Text>
      메인 페이지로 <Link to="/">돌아가기</Link>
    </Text>
  )
}

export default BackMainLink