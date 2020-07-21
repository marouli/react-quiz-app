import React from 'react';
import styled from 'styled-components';
import logo from '../images/amsterdam-silhouette.png';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #ffc44f;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    margin-top: 56px;
    padding: 10px 0 14px 22px;
    color: #fff;
    font-size: 1.8rem;
    font-weight: normal;
  }

  img {
    margin: 24px 14px 24px 60px;
    width: 145px;
    filter: drop-shadow(5px 5px 5px #fff);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt='amsterdam-logo' />
      <h1>How well do you know Amsterdam? Take the quiz and find out!</h1>
    </StyledHeader>
  );
};

export default Header;
