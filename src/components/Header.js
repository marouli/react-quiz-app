import React from 'react';
import styled from 'styled-components';
import logo from '../amsterdam-silhouette.png';

const StyledHeader = styled.header`
    width: 100%;
    background-image: linear-gradient(to bottom, #daf7a6, #ffff);
    display: flex;
    align-items:center;
    justify-content:center;
    
    h1 {
        width: 100%;
        padding: 10px 0 14px 22px;
        background-image: linear-gradient(to right, #117864, #52be80);
        color: #fff;
        font-weight: normal;
    }
    
    img {
        margin: 24px 32px 24px 24px;
        width: 10%;
        filter: drop-shadow(5px 5px 5px #fff);
    }
`;

const Header = () => {
    return <StyledHeader>
            <h1>How well do you know Amsterdam? Take the quiz and find out!</h1> 
            <img src={logo} alt="amsterdam-logo"/>
        </StyledHeader>
}

export default Header;
