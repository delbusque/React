import { useState } from "react";

import QUESTIONS from '../questions.js';

const Quiz = () => {

    const [answers, setAnswers] = useState([])
    let currentQuestion = QUESTIONS[answers.length]

    const handleSelectAnswer = (answer) => {
        setAnswers(prevAnswers => {
            return [...prevAnswers, answer]
        })
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{currentQuestion.text}</h2>
                <ul id="answers">
                    {currentQuestion.answers.map(answer => <li className="answer" key={answer}>
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Quiz;