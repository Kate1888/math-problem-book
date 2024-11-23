import './ControlWorkTest.css';
import {useParams} from "react-router-dom";
import getControlWorkQuestions from "../../data/controlWorks/questions";
import getControlWork from "../../data/controlWorks/works";
import {useState} from "react";
import Header from "../Headers/ControlWorkHeader";

function ControlWorkTest() {
    let params = useParams();
    let workNumber = params.id;
    const workData = getControlWork(workNumber);
    const questions = getControlWorkQuestions(workNumber); // Получаем вопросы по номеру работы
    const [answers, setAnswers] = useState({}); // Сохраняем ответы пользователя
    const [result, setResult] = useState(null); // Состояние для показа итогов

    const handleAnswerChange = (questionOrder, answerIndex) => {
        setAnswers((prevAnswers) => ({
         ...prevAnswers,
        [questionOrder]: answerIndex,
      }));
    };


    const handleSubmit = () => {
        // Подсчет правильных ответов
        const correctAnswersCount = questions.reduce((count, question) => {
          const userAnswerIndex = answers[question.order];
          const isCorrect =
            userAnswerIndex !== undefined && question.answers[userAnswerIndex].isRight;
          return count + (isCorrect ? 1 : 0);
        }, 0);
    
        setResult({
          correct: correctAnswersCount,
          total: questions.length,
        });
      };

    const handleToStart = () => {
        setAnswers({});
        setResult(null);
    }

    if (result) {
        return (
          <div>
            <h1>
              <p align="center">
                  {workData.theme}
              </p>
            </h1>
            <Header/>
            <h2>Результат</h2>
            <p>
              Вы ответили правильно на {result.correct} из {result.total} вопросов.
            </p>
            <button onClick={() => handleToStart()}>Пройти снова</button>
          </div>
        );
      }

      return (        
        <div className='controlWorkTest'>
          <h1>
              <p align="center">
                  {workData.theme}
              </p>
          </h1>

          <Header/>

          {questions.map((question) => (
            <div key={question.order} style={{ marginBottom: "20px" }}>
              <h3>
                {question.order}. {question.text}
              </h3>
              {question.image && <img src={question.image} alt="Иллюстрация" />}
              {question.answers.map((answer, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.order}`}
                      value={index}
                      checked={answers[question.order] === index}
                      onChange={() => handleAnswerChange(question.order, index)}
                    />
                    {answer.text}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>Пройти</button>
        </div>
      );
}

export default ControlWorkTest;
