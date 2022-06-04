export default function Question(props)
{
   const correctAnswerClassName = 
   `
   ${props.selectedAnswer === props.correctAnswer ? 'ans-btn-selected' : 'ans-btn'}
   `

    const incorrectAnswers = props.incorrectAnswers.map(badAnswer=>{
        const incorrectAnswerClassName = 
        `
        ${props.selectedAnswer === badAnswer ? "ans-btn-selected" : "ans-btn"}
		${(props.showAnswer && props.selectedAnswer === badAnswer) && "ans-btn-incorrect"}
        `
        return (<button onClick={()=>props.handleChoice(props.id , props.correctAnswer)}  
                        className={incorrectAnswerClassName}>{badAnswer}
                </button>)
    })
    console.log(props.id)
    return(
        <li className="question-list-item">
            <h1 className="question--title">{props.question}</h1>
            <button onClick={()=>props.handleChoice(props.id , props.correctAnswer)} 
                className={correctAnswerClassName}>{props.correctAnswer}
            </button>
            {incorrectAnswers}
            <hr></hr>
        </li>
    )
}