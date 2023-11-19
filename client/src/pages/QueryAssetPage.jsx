import React, { useState } from 'react';
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

const QueryAssetPage = () => {
  const [c_cert, setCert] = useState('');
  const [id, setAssetId] = useState('');
  const [assetResult, setAssetResult] = useState('');
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCertChange = (e) => {
    setCert(e.target.value);
  };

  const handleAssetIdChange = (e) => {
    setAssetId(e.target.value);
  };

  const handleQueryAsset = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/asset?c_cert=${c_cert}&id=${id}`);

      setAssetResult(response.data.data.message);
      setSuccess(response.data.success);
      setShowModal(true);
      setCert('');
      setAssetId('');
    } catch (error) {
      setAssetResult(error.response.data.error);
      setSuccess(error.response.data.success);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainBackground>
      <MainTitle>자산 조회</MainTitle>
      <form onSubmit={handleQueryAsset}>
        <Input
          label="인증서"
          type="text"
          id="cert"
          value={c_cert}
          onChange={handleCertChange}
        />
        <Input
          label="자산일련번호"
          type="text"
          id="assetId"
          value={id}
          onChange={handleAssetIdChange}
        />
        <Button type="submit">자산 조회</Button>
      </form>
      <BackMainLink />
      {showModal && (
        <Modal closeModal={closeModal}>
          <ResultTable result={success ? "Success" : "Fail"} message={JSON.stringify(assetResult)} />
        </Modal>
      )}
    </MainBackground>
  );
};

export default QueryAssetPage;