import React, {useState} from "react";

const QuestionSet =  ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionSet">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
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
  );
};

export default QuestionSet;
