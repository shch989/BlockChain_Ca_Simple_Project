import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// components
import MainBackground from '../components/MainBackground';
import MainTitle from '../components/MainTitle';

const ButtonBox = styled.div`
  margin-top: 45px;
`

const Button = styled.button`
  display: block;
  width: 80%;
  padding: 10px;
  margin: 25px auto;
  margin-bottom: 0;
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
    navigate('/wallet-admin');
  };

  const handleUserWalletClick = () => {
    navigate('/wallet-user');
  };
  return (
    <MainBackground>
      <MainTitle>자산관리 사이트에 오신 것을 환영합니다.</MainTitle>
      <ButtonBox>
        <Button onClick={handleAdminWalletClick}>관리자 지갑 생성</Button>
        <Button onClick={handleUserWalletClick}>사용자 지갑 생성</Button>
      </ButtonBox>
    </MainBackground>
  )
}

export default MainWalletPage