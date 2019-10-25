import React from 'react'

const Result = ({score, reset}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playBtn" onClick={reset}>
            Play again!
        </button>
    </div>
)

export default Result