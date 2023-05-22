// import { useState } from "react";
import Preloader from "./Components/Preloader/Preloader"
import Main from "./Components/Main/Main"

import './AppStyle/App.css'

function App() {

  // const [isQuizStarted, setQuizStarted] = useState(false);

  return (
    <>
      <Preloader/>
      <Main/>
    </>
  )
}

export default App
