import React, { Component } from 'react';
import styled from 'styled-components';
import db from '../../db';
import Question from './Question';
import Result from './Result';

const StyledBoard = styled.main`
  margin: auto;
  width: 70%;
  margin-top: 60px;
  padding: 35px;
  background-color: #f2f3f4;
  border-radius: 5px;
  box-shadow: 0 0 8px #d5d8dc;
`;

class QuizBoard extends Component {
  state = {
    questionList: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    db().then((question) => {
      this.setState({
        questionList: question,
      });
    });
  };

  computeAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  }

  resetQuiz = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <StyledBoard>
        {this.state.questionList.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionList.map(
            ({ question, answers, correct, questionId }) => (
              <Question
                key={questionId}
                question={question}
                options={answers}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} reset={this.resetQuiz} />
        ) : null}
      </StyledBoard>
    );
  }
}

export default QuizBoard;
