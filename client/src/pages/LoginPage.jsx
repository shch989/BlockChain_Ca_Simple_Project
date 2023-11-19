import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/UI/Input';
import axios from 'axios';

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

const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`;

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

const Text = styled.span`
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #333;

  &:hover {
    color: #4caf50;
  }
`;

const LoginPage = () => {
  const [adminId, setAdminId] = useState('');
  const [adminPw, setAdminPw] = useState('');
  const [adminResult, setAdminResult] = useState('');

  const handleAdminSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/admin', {
        adminid: adminId,
        adminpw: adminPw,
      });

      const data = response.data;
      setAdminResult(`RESULT: ${data.result}`);

      if (data.result === 'success') {
        setAdminResult('관리자 지갑이 생성되었습니다.');
      } else {
        setAdminResult(`에러가 발생하였습니다. ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting admin data:', error);
      setAdminResult('서버와의 통신 중 에러가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <Container>
      <OuterBox>
        <Title>관리자 지갑 추가</Title>
        <Input
          label="아이디"
          type="text"
          id="adminid"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
        <Input
          label="패스워드"
          type="password"
          id="adminpw"
          value={adminPw}
          onChange={(e) => setAdminPw(e.target.value)}
        />
        <Button onClick={handleAdminSubmit}>생성</Button>
        <Text>
          메인 페이지로 <Link to="/">돌아가기</Link>
        </Text>
        <ResultParagraph>{adminResult}</ResultParagraph>
      </OuterBox>
    </Container>
  );
};

export default LoginPage;