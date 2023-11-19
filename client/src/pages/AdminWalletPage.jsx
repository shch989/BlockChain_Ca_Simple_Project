import React, { useState } from 'react';
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
  width: 80%;
  padding: 10px;
  margin: 30px auto;
  margin-bottom: 0px;
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

const AdminWalletPage = () => {
  const [adminId, setAdminId] = useState('');
  const [adminPw, setAdminPw] = useState('');
  const [adminResult, setAdminResult] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAdminSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/admin', {
        adminid: adminId,
        adminpw: adminPw,
      });
  
      setAdminResult(response.data.data.message);
      setShowModal(true);
    } catch (err) {
      setAdminResult(err.response.data.error);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainBackground>
      <MainTitle>관리자 지갑</MainTitle>
      <Input
        label="관리자ID"
        type="text"
        id="adminid"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <Input
        label="비밀번호"
        type="password"
        id="adminpw"
        value={adminPw}
        onChange={(e) => setAdminPw(e.target.value)}
      />
      <Button onClick={handleAdminSubmit}>관리자 인증서 생성</Button>
      <BackMainLink />
      {showModal && (
        <Modal closeModal={closeModal}>
          <ResultParagraph>{adminResult}</ResultParagraph>
        </Modal>
      )}
    </MainBackground>
  );
};

export default AdminWalletPage;