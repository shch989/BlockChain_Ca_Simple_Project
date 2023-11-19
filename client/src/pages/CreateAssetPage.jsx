import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// components
import Input from '../components/UI/Input';
import BackMainLink from '../components/MainBackLink';
import MainBackground from '../components/MainBackground';
import MainTitle from '../components/MainTitle';
import Modal from '../components/UI/Modal';

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

const ResultParagraph = styled.p`
  color: #333;
  font-weight: bold;
`;

const CreateAssetPage = () => {
  const [c_cert, setCert] = useState('');
  const [id, setAssetId] = useState('');
  const [c_color, setColor] = useState('');
  const [c_size, setSize] = useState('');
  const [c_owner, setOwner] = useState('');
  const [c_value, setValue] = useState('');
  const [assetResult, setAssetResult] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCertChange = (e) => {
    setCert(e.target.value);
  };

  const handleAssetIdChange = (e) => {
    setAssetId(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleCreateAsset = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:8080/asset', {
        c_cert,
        id,
        c_color,
        c_size,
        c_owner,
        c_value,
      });

      setAssetResult(response.data.data.message);
      setShowModal(true);
      setCert('')
      setAssetId('')
      setColor('')
      setSize('')
      setOwner('')
      setValue('')
    } catch (error) {
      setAssetResult(error.response.data.error);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainBackground>
      <MainTitle>자산 생성</MainTitle>
      <form onSubmit={handleCreateAsset}>
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
        <Input
          label="색상"
          type="text"
          id="color"
          value={c_color}
          onChange={handleColorChange}
        />
        <Input
          label="크기"
          type="text"
          id="size"
          value={c_size}
          onChange={handleSizeChange}
        />
        <Input
          label="소유주"
          type="text"
          id="owner"
          value={c_owner}
          onChange={handleOwnerChange}
        />
        <Input
          label="가격"
          type="text"
          id="value"
          value={c_value}
          onChange={handleValueChange}
        />
        <Button>자산 생성</Button>
      </form>
      <BackMainLink />
      {showModal && (
        <Modal closeModal={closeModal}>
          <ResultParagraph>{assetResult}</ResultParagraph>
        </Modal>
      )}
    </MainBackground>
  );
};

export default CreateAssetPage;