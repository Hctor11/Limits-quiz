import { useState } from "react";
import Questions from "../../Questions/questions";
import "../Quiz/Quiz.css";
import Preloader from "../Preloader/Preloader";
// import { redirect } from "react-router-dom";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";
import img1 from "../../QuestionImg/q1.png";
import img2 from "../../QuestionImg/q2.png";
import img3 from "../../QuestionImg/q3.png";
import img4 from "../../QuestionImg/q4.png";
import img5 from "../../QuestionImg/q5.png";

const Quiz = () => {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [points, setPoint] = useState(0);
  const [isFinished, setIsFinished] = useState(false); 9

  function handleAnswerSubmit(isCorrect, e) {
    //agregar puntaje
    if (isCorrect) setPoint(points + 1);
    //agregar estilo para saber si es correct
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    //cambiar de pregunta
    if(actualQuestion === Questions.length -1 ){
      setIsFinished(true);
    }else{
      setActualQuestion(actualQuestion + 1)
    }
  }

  if(isFinished) return (
    <FinishedQuiz>
      
    </FinishedQuiz>
  );

  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="Quiz">
      <Preloader />

      <div className="quizCard">
        <div className="topCard">
          <div className="numberQuestion">
            <span>
              Pregunta {actualQuestion + 1} de {Questions.length}{" "}
            </span>
          </div>
          <div className="titleQuestion">
            <img
              className="imageQuiz"
              src={images[actualQuestion]}
              alt="image"
            />
          </div>
        </div>
        <div className="bottomCard">
          <div className="buttons">
            {Questions[actualQuestion].options.map((answer) => (
              <button
                className="btn"
                key={answer.ansText}
                onClick={
                  (e) => {
                    handleAnswerSubmit(answer.isCorrect, e);
                  }
                }
              >
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
