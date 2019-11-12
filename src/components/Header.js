import React from 'react';
import styled from 'styled-components';
import logo from '../amsterdam-silhouette.png';

const StyledHeader = styled.header`
    width: 100%;
    // background-image: linear-gradient(to bottom, #f39c12, #ffff);
    background-color: #52be80;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        width: 100%;
        margin-top: 56px;
        padding: 10px 0 14px 22px;
        color: #fff;
        font-weight: normal;
    }
    
    img {
        margin: 24px 14px 24px 42px;
        width: 7%;
        filter: drop-shadow(5px 5px 5px #fff);
    }
`;

const Header = () => {
    return <StyledHeader>
            <img src={logo} alt="amsterdam-logo"/>
            <h1>How well do you know Amsterdam? Take the quiz and find out!</h1> 
        </StyledHeader>
}

export default Header;
