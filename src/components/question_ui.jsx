import {nanoid} from 'nanoid'
export default function Question(props)
{
   const correctAnswerClassName = 
   `
   ${props.selectedAnswer === props.correctAnswer ? 'ans-btn-selected' : 'ans-btn'}
   ${(props.showAnswer && props.selectedAnswer === props.correctAnswer) && 'ans-btn-correct'}
   `

    const incorrectAnswers = props.incorrectAnswers.map(badAnswer=>{
        const incorrectAnswerClassName = 
        `
        ${props.selectedAnswer === badAnswer ? "ans-btn-selected" : "ans-btn"}
		${(props.showAnswer && props.selectedAnswer === badAnswer) && "ans-btn-incorrect"}
        `
        return (<button key={nanoid()} onClick={()=>props.handleChoice(props.id , badAnswer)}  
                        className={incorrectAnswerClassName}>{badAnswer}
                </button>)
    })
    return(
        <li className="question-list-item">
            <h1 className="question--title">{props.question}</h1>
            <button key={nanoid()} onClick={()=>props.handleChoice(props.id , props.correctAnswer)} 
                className={correctAnswerClassName}>{props.correctAnswer}
            </button>
            {incorrectAnswers}
            <hr></hr>
        </li>
    )
}