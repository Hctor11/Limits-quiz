import { useEffect, useState } from "react";
import Questions from "../../Questions/questions";
import "../Quiz/Quiz.css";
import Preloader from "../Preloader/Preloader";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";
import img1 from "../../QuestionImg/q1.png";
import img2 from "../../QuestionImg/q2.png";
import img3 from "../../QuestionImg/q3.png";
import img4 from "../../QuestionImg/q4.png";
import img5 from "../../QuestionImg/q5.png";

const Quiz = () => {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [points, setPoint] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    //agregar puntaje y estilos
    if (isCorrect){ 
      setPoint(points + 1)
      e.target.classList.add("correct");
    }else{
      e.target.classList.add("incorrect");
    }

    //cambiar de pregunta
    setTimeout(() => {
      if (actualQuestion === Questions.length - 1) {
        setIsFinished(true);
      } else {
        setActualQuestion(actualQuestion + 1);
      }
    }, 1500);
  }

  useEffect(() => {

    const timeInterval = setInterval(() =>{

      if(timeRemaining > 0) setTimeRemaining((prev) => prev - 1)
      if(timeRemaining === 0){
        // setAreDisabled(true)
        setTimeRemaining(15);
        setActualQuestion(actualQuestion + 1)
      }

    },1000)

    return () => clearInterval(timeInterval);
  }, [timeRemaining])

  if (isFinished) return <FinishedQuiz points={points}></FinishedQuiz>;

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
          <h4 className="titleQ">Resuelve el siguiente limite:</h4>
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
                disabled={areDisabled}
                className="btn"
                key={answer.ansText}
                onClick={(e) => {
                  handleAnswerSubmit(answer.isCorrect, e)
                  setTimeRemaining(15);
                  setAreDisabled(false);
                  }}>
                {answer.ansText}
              </button>
            ))}
          </div>
          <div className="time-remaining">
            <span className="time-remaining">tiempo restante: {timeRemaining}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;