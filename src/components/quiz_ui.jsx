import Question from "./question_ui"
import shape1 from './images/shape-1.png'
import shape2 from './images/shape-2.png'
import getQuestions from './getQuestions'
import {useEffect} from 'react'
import { useState } from "react"
import {nanoid} from 'nanoid'
export default function QuizListUi(){
    const [questionArray , setQuestionArray] = useState([])
    
    function handleChoice(id , answer){
        setQuestionArray(prevQuestionArray=>(
            prevQuestionArray.map(question=>{
                question.id === id ?
                {...question , selectedAnswer : answer} :
                question
            })
        ))
    }

    useEffect(()=>{
        getQuestions().then(questions=>{
            return setQuestionArray(questions.map(question=>{
                return {
                    ...question,
                    id : nanoid(),
                    selectedAnswer :"",
                    showAnswer : false
                }
            }));
        });
    },[])

    const renderQuestions = questionArray.map(question=>(
        <Question 
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
            <button  className="start--btn">check answers</button>
            <img className='shape2' src={shape2} alt="blob"/>
        </div>
    )
}