import './IndividualWorkTest.css';
import {useParams} from "react-router-dom";
import getIndividualWorkQuestions from "../../individualWorksData/individualWorkQuestions";
import {useState} from "react";

function IndividualWorkTest() {

    let params = useParams();
    let workNumber = params.id;
    let workQuestions = getIndividualWorkQuestions(workNumber);

    console.log(workQuestions);

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);


    // Добавляем проверку на наличие вопросов
    if (!workQuestions || workQuestions.length === 0) {
        return <div>Вопросы не найдены для работы {workNumber}</div>;
    }

    const handleAnswerClick = (isRight) => {
        if (isRight) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionNumber + 1;
        if (nextQuestion < workQuestions.length) {
            setCurrentQuestionNumber(nextQuestion);
        } else {
            setIsFinished(true);
        }
    };

    let currentQuestion = workQuestions[currentQuestionNumber];

  return (
    <div className="IndividualWorkTest">
        {!isFinished ? (
            <div>
                <h3>{currentQuestion.order}. {currentQuestion.text}</h3>

                {currentQuestion.image && (
                    <img src={currentQuestion.image} alt="Question related" />
                )}

                <div className="answers">
                    {currentQuestion.answers.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswerClick(answer.isRight)}>
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        ) : (
            <div>
                <h2>Тест завершен!</h2>
                <p>Ваш результат: {score} из {workQuestions.length}</p>
            </div>
        )}
    </div>
  );
}

export default IndividualWorkTest;
