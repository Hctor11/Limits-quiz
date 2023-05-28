import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Main from './Components/Main/Main.jsx'
import Quiz from './Components/Quiz/Quiz.jsx'
import FinishedQuiz from './Components/FinishedQuiz/FinishedQuiz.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Main/> 
  },
  {
    path: '/quiz',
    element: <Quiz/>
  },
  {
    path: '/finished',
    element: <FinishedQuiz/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
