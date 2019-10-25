import React, {useState} from 'react';

const QuestionBox =({question, options, selected}) => {
    const [answer, setAnswer] = useState(options)
    return (
        <div className="questionBox">
            <div className="question">{question}</div>   
            {answer.map((text, i) => (
                <button
                    key={i}
                    className="answerBtn"
                    onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }}
                >
                    {text}
                </button>
            ))}
        </div>
    )
}

export default QuestionBox;