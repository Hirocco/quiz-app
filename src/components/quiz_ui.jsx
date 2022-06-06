import Question from "./question_ui"
import shape1 from './images/shape-1.png'
import shape2 from './images/shape-2.png'
import getQuestions from './getQuestions'
import {useEffect} from 'react'
import { useState } from "react"
import {nanoid} from 'nanoid'
export default function QuizListUi(){
    const [questionArray , setQuestionArray] = useState([])
    const [questionLoading , setQuestionLoading] = useState(true)
    const [countAnswers , setCountAnswers] = useState(0)
    const [gameOver,setGameOver] = useState(false)
    const [restartGame , setRestart] = useState(false)
    const [stopRequestingIdiot , setThatBitch] = useState(false)
    
    function handleChoice(id , answer){
        setQuestionArray(prevQuestionArray => prevQuestionArray.map(question => 
            question.id == id ? {...question , selectedAnswer : answer} : {...question}))
    }

    function checkAnswers(){
        let correctAnswers = 0
        questionArray.forEach(question=>{
            if(question.correct_answer === question.selectedAnswer) correctAnswers++
        })
        setCountAnswers(correctAnswers)
        setQuestionArray(prevArray=>(prevArray.map(question=>(
            {...question , showAnswer : true}
        ))))
        setGameOver(true)
        setRestart(false)
    }

    useEffect(()=>{
        getQuestions().then(questions=>{
            setQuestionArray(questions.map(question=>{
                return {
                    ...question,
                    id : nanoid(),
                    selectedAnswer :"",
                    showAnswer : false
                }
            }));
            setQuestionLoading(false)
        });
    },[stopRequestingIdiot])
    function restart(){
        setRestart(restart=>!restart)
        setThatBitch(bitch=>!bitch)
        setCountAnswers(0)
        setGameOver(false)
    }
    const renderQuestions = questionArray.map(question=>(
        <Question 
            key={question.id}
            id={question.id} 
            selectedAnswer={question.selectedAnswer} 
            showAnswer={question.showAnswer} 
            question={question.question} 
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            handleChoice={handleChoice}
        />
    ))
    return(
        <div className="quiz-list">
            <img className='shape1' src={shape1} alt="blob"/>
            
            <ul className="list">
                {renderQuestions}
            </ul>
            <button onClick={checkAnswers} className="check--btn">{ questionLoading ? `Loading...` :  `check answers`}</button>
            {gameOver && restartGame == false && <h1 className="score--title">You scored : {countAnswers} points</h1>}
            {gameOver && restartGame == false && <button onClick={restart} className="restart--btn">Play again</button>} 
            <img className='shape2' src={shape2} alt="blob"/>
        </div>
    )
}