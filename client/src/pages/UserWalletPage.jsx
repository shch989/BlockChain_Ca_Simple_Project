import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
// components
import Input from '../components/UI/Input';
import BackMainLink from '../components/MainBackLink';
import MainBackground from '../components/MainBackground';
import MainTitle from '../components/MainTitle';
import Modal from '../components/UI/Modal';
import ResultTable from '../components/ResultTable';

const Button = styled.button`
  display: block;
  width: 70%;
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

const UserWalletPage = () => {
  const [userId, setUserId] = useState('');
  const [affilication, setAffilication] = useState('');
  const [userResult, setUserResult] = useState('');
  const [success, setSuccess] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const handleAdminSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:8080/user', {
        userId,
        affilication,
      });

      setUserResult(response.data.data.message);
      setSuccess(response.data.success)
      setShowModal(true);
      setUserId('')
      setAffilication('')
    } catch (error) {
      setUserResult(error.response.data.error);
      setSuccess(error.response.data.success)
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainBackground>
      <MainTitle>사용자 지갑</MainTitle>
      <form onSubmit={handleAdminSubmit}>
        <Input
          label="사용자ID"
          type="text"
          id="userid"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          label="사용자부서"
          type="select"
          id="affilication"
          value={affilication}
          onChange={(e) => setAffilication(e.target.value)}
        >
          <option value="">선택하세요</option>
          <option value="org1.department1">org1.department1</option></Input>
        <Button>사용자 인증서 생성</Button>
      </form>
      <BackMainLink />
      {showModal && (
        <Modal closeModal={closeModal}>
          <ResultTable result={success ? "Success" : "Fail"} message={userResult} />
        </Modal>
      )}
    </MainBackground>
  );
};

export default UserWalletPage