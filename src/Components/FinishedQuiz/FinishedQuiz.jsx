import Preloader from "../Preloader/Preloader"

// eslint-disable-next-line react/prop-types
const FinishedQuiz = ( { points } ) => {
  return (
    <div className='finishedQuiz'>
        <Preloader></Preloader>
        <h1>Hola terminaste el juego, obtuviste {points} punto/s de 5 puntos</h1>
    </div>
  )
}

export default FinishedQuiz