import StartPage from './components/start_page'
import './App.css'
import {useState} from 'react'
import QuizListUi from './components/quiz_ui'
function App() {
  const [startGame , setGame] = useState(true)
  function start(){
    setGame(start=>!start)
  }
  return (
    <div className="App">
     {startGame ? <StartPage start={start}/> : <QuizListUi/>}
    </div>
  )
}

export default App
