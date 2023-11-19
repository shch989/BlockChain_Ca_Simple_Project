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
  width: 60%;
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

  const handleCreateAssetClick = () => {
    navigate('/create-asset');
  };

  const handleQueryAssetClick = () => {
    navigate('/query-asset');
  };

  return (
    <MainBackground>
      <MainTitle>지갑 프로토타입 프로젝트</MainTitle>
      <ButtonBox>
        <Button onClick={handleAdminWalletClick}>관리자 지갑 생성</Button>
        <Button onClick={handleUserWalletClick}>사용자 지갑 생성</Button>
        <Button onClick={handleCreateAssetClick}>자산 생성</Button>
        <Button onClick={handleQueryAssetClick}>자산 조회</Button>
      </ButtonBox>
    </MainBackground>
  )
}

export default MainWalletPage