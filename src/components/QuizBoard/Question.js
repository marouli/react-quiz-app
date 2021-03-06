import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBox = styled.section`
  padding: 15px;

  .question {
    margin: 0;
    font-size: 22px;
    font-weight: 400;
  }

  button {
    margin: 12px 22px 16px 0;
    padding: 5px 12px 5px 12px;
    font-size: 16px;
    color: #fff;
    background-color: #ff4db3;
    border: none;
    border-radius: 5px;
  }
`;

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <StyledBox>
      <h3 className='question'>{question}</h3>
      {answer.map((text, i) => (
        <button
          key={i}
          className='answerBtn'
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </StyledBox>
  );
};

export default QuestionBox;
