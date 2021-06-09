import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../theme';
import { loginUser } from '../actions/actionCreators';

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    // retreive client ID from backend server, then authenticate user via Google OAuth API
    fetch('/api/sign-in/google/client-id')
      .then((res) => res.json())
      .then(({ googleClientId }) => {
        gapi.load('auth2', function () {
          gapi.auth2.init({ client_id: googleClientId }).then(
            (googleAuth) => {
              googleAuth
                .signIn()
                .then((googleUser) => {
                  const id_token = googleUser.getAuthResponse().id_token;
                  dispatch(loginUser(id_token));
                })
                .catch(({ error }) => console.log({ error }));
            },
            ({ error, details }) => {
              console.log({ error, details });
            }
          );
        });
      });
  };

  return (
    <LoginWrapper>
      <LoginForm action=''>
        <Welcome>Welcome!</Welcome>
        <ExternalButton>
          <LinkedInLogo
            src='https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png'
            alt='LinkedIn logo'
          />
          Sign in with LinkedIn
        </ExternalButton>
        <ExternalButton onClick={(e) => handleGoogleSignIn(e)}>
          <GoogleLogo
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
            alt='Google logo'
          />
          Sign in with Google
        </ExternalButton>
        <ExternalButton onClick={(e) => handleGoogleSignIn(e)}>
          <GithubLogo
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'
            alt='Github logo'
          />
          Sign in with Github
        </ExternalButton>
      </LoginForm>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 36px;
  height: 50%;
  border-radius: 10px;
  background-color: ${colors.lightBlue};
  color: ${colors.mediumBrown};
  box-shadow: 0 0 10px ${colors.mediumGreen};
`;

const Welcome = styled.h1`
  margin-bottom: 24px;
`;

const ExternalButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  background-color: ${colors.lightBlue};
  color: ${colors.darkBlue};
  border: 2px solid ${colors.darkBlue};
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${colors.mediumGreen};
    color: ${colors.lightBlue};
    border: 2px solid ${colors.mediumGreen};
  }
`;

const LinkedInLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

const GoogleLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

const GithubLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

export default Login;
