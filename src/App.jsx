import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Quiz from "./Components/Quiz/Quiz";

import "./AppStyle/App.css";

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
