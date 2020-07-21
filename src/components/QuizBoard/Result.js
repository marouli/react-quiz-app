import React from 'react';
import styled from 'styled-components';

const StyledResult = styled.section`
  button {
    margin-top: 12px;
    margin-right: 15px;
    padding: 5px 12px 5px 12px;
    font-size: 18px;
    color: #fff;
    background-color: #4da6ff;
    border: none;
    border-radius: 5px;
  }
`;

const Result = ({ score, reset }) => {
  return (
    <StyledResult>
      <div className='score'>You scored {score} / 5 correct answers!</div>
      <button className='playBtn' onClick={reset}>
        Play again!
      </button>
    </StyledResult>
  );
};

export default Result;
