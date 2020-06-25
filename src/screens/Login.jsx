import React from 'react';
import LoginForm from '../components/screen-components/login/login-form/LoginForm';
import styled from 'styled-components';
import loginImage from '../assets/ilustrations/mainImage.png';
import RowWrapper from '../components/common-components/wrappers/row-wrapper/RowWrapper';

const LoginWrapper = styled(RowWrapper)`
  height: 100%;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Login = () => (
  <>
    <LoginWrapper>
      <LoginForm />
      <ImgWrapper>
        <img src={loginImage} alt="login" />
      </ImgWrapper>
    </LoginWrapper>
  </>
);

export default Login;
