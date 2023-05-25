import { useState, useEffect } from "react";
import Questions from "../../Questions/questions";
import "../Quiz/Quiz.css";
import Preloader from "../Preloader/Preloader";
import img1 from "../../QuestionImg/q1.png";
import img2 from "../../QuestionImg/q2.png";
import img3 from "../../QuestionImg/q3.png";
import img4 from "../../QuestionImg/q4.png";
import img5 from "../../QuestionImg/q5.png";

const Quiz = () => {
  const [actualQuestion, setActulaQuestion] = useState(0);
  const [poits, setPoint] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerSubmit = () => {

  }

  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="Quiz">
      <Preloader/>

      <div className="quizCard">
        <div className="topCard">
          <div className="numberQuestion">
            {/* <span>pregunta 1 de 5</span> */}
            <span>Pregunta {actualQuestion + 1} de {Questions.length} </span> 
          </div>
          <div className="titleQuestion">
            <img className="imageQuiz" src={images[actualQuestion]} alt="image" />
          </div>
        </div>
        <div className="bottomCard">
          <div className="buttons">
            {/* <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button> */}
          {Questions[actualQuestion].options.map((answer)=> (
            <button className="btn" key={answer.ansText} onClick={() => handleAnswerSubmit()}>
                {answer.ansText}
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
