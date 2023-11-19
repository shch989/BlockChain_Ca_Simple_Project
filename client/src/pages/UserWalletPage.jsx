import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
// components
import Input from '../components/UI/Input';
import BackMainLink from '../components/MainBackLink';
import MainBackground from '../components/MainBackground';
import MainTitle from '../components/MainTitle';
import Modal from '../components/UI/Modal';

const ResultParagraph = styled.p`
  color: #333;
  font-weight: bold;
`;

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

const UserWalletPage = () => {
  const [userId, setUserId] = useState('');
  const [affilication, setAffilication] = useState('');
  const [userResult, setUserResult] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAdminSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user', {
        userid: userId,
        affilication,
      });

      setUserResult(response.data.data.message);
      setShowModal(true);
    } catch (err) {
      setUserResult(err.response.data.error);
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainBackground>
      <MainTitle>사용자 지갑</MainTitle>
      <Input
        label="아이디"
        type="text"
        id="userid"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Input
        label="소속"
        type="text"
        id="affilication"
        value={affilication}
        onChange={(e) => setAffilication(e.target.value)}
      />
      <Button onClick={handleAdminSubmit}>사용자 인증서 생성</Button>
      <BackMainLink />
      {showModal && (
        <Modal closeModal={closeModal}>
          <ResultParagraph>{userResult}</ResultParagraph>
        </Modal>
      )}
    </MainBackground>
  );
};

export default UserWalletPage