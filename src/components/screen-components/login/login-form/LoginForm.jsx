import React, { useState } from 'react';
import styled from 'styled-components';
import { CONTAINER_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import lockIcon from '../../../../assets/icons/lock.svg';
import emailIcon from '../../../../assets/icons/e-mail.svg';
import { useFormik } from 'formik';
import Text24 from '../../../common-components/text/text-24/Text24';
import Text12 from '../../../common-components/text/text-12/Text12';
import Button from '../../../common-components/buttons/button/Button';
import CheckBox from '../../../common-components/buttons/checkbox/CheckBox.jsx';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 30%;
  background: ${CONTAINER_BACKGROUND_COLOR};
  border-right: 1px solid ${BORDER_COLOR};
  padding: 50px;
  display: flex;
  justify-content: center;
  algin-items: center;
  @media (max-width: 1000px) {
    max-width: unset;
    width: 100%;
  }
`;

const Wrapper = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled(Text24)`
  margin-bottom: 50px;
`;

const SubmitButton = styled(Button)`
  margin-top: 50px;
`;

const ForgotPasswordButton = styled(ButtonText)`
  display: flex;
  align-self: center;
  font-weight: 400;
  margin-top: 10px;
  font-size: 12px;
  color: #404040;
`;

const SignUpButton = styled(ButtonText)`
  font-size: 12px;
  padding: 0 4px;
`;

const AccountCreateRowWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
`;




const LoginForm = () => {
  const { push } = useHistory();
  const [loggedInCheck, setLoggedInCheck] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log("submit button pressed!");
      console.log("values are  "+values.email +"  "+values.password);

      axios.post("http://localhost:8000/signin-signup/login",{email : values.email,password: values.password})
      .then((res)=>{
        console.log("response type is:"+ res.data.status);
         // status = true;
         if(res.data.status === 1){
           push("/profile");
    
          return true;
         } 
         else{
           alert("errr");
           return false;
         }
    
      })
      .catch((err)=>{
        console.log("error is:"+err);
        return false;
      })



      
    
    },
  });

  return (
    <>
      <Container>
        <Wrapper onSubmit={formik.handleSubmit}>
          <Header>Log In</Header>
          <InputWithIcon
            name="email"
            placeholder="E-mail Address"
            onChange={formik.handleChange}
            value={formik.values.password}
            icon={emailIcon}
          />
          <InputWithIcon
            name="password"
            isPassword
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.email}
            icon={lockIcon}
          />
          <CheckBox
            onCheck={() => setLoggedInCheck(!loggedInCheck)}
            isChecked={loggedInCheck}
            text="Keep me logged in"
          />
          <SubmitButton
            disabled={!formik.values.email || !formik.values.password}
         //   onClick={() => push('/profile')}
            type="submit">
            Log In
          </SubmitButton>
          <ForgotPasswordButton type="button">Forgot password?</ForgotPasswordButton>
          <AccountCreateRowWrapper>
            <Text12>Don&apos;t have an account?</Text12>
            <SignUpButton type="button" onClick={() => push('/register')}>
              Sign Up
            </SignUpButton>
          </AccountCreateRowWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default LoginForm;
