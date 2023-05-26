import Preloader from "../Preloader/Preloader"
import '../FinishedQuiz/FinishedQuiz.css'

// eslint-disable-next-line react/prop-types
const FinishedQuiz = ( { points } ) => {
  return (
    <div className='finishedQuiz'>
        <Preloader></Preloader>
        <h4 className="finished-title">
        Terminaste el juego, obtuviste {points} punto/s de 5 puntos
        </h4>
    </div>
  )
}

export default FinishedQuiz