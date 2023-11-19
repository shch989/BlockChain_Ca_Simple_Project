import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// components
import MainBackground from '../components/MainBackground';
import MainTitle from '../components/MainTitle';

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #008080;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #056b93;
  }

  &:focus {
    outline: none;
  }
`;

const MainWalletPage = () => {
  const navigate = useNavigate()

  const handleAdminWalletClick = () => {
    navigate('/admin-wallet');
  };

  const handleUserWalletClick = () => {
    navigate('/user-wallet');
  };
  return (
    <MainBackground>
      <MainTitle>지갑 페이지</MainTitle>
      <Button onClick={handleAdminWalletClick}>관리자 인증서 생성</Button>
      <Button onClick={handleUserWalletClick}>사용자 인증서 생성</Button>
    </MainBackground>
  )
}

export default MainWalletPage