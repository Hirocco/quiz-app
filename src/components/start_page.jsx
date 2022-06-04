import shape1 from './images/shape-1.png'
import shape2 from './images/shape-2.png'
function StartPage(props){
    return(
        <div className="start-page">
            <img className='shape1' src={shape1} alt="blob"/>
            <h1 className='start--title'>Quizzical</h1>
            <p className='start--p'>Test yourself!</p>
            <button onClick={props.start} className='start--btn'>Start Quizz</button>
            <img className='shape2' src={shape2} alt="blob"/>
        </div>
    )
}

export default StartPage