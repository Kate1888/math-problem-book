import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Box, Heading, Text, VStack,} from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout";
import getIndividualWorkQuestions from "../../data/individual-works/questions";
import {getIndividualWorkByNumber} from "../../data/individual-works/works";
import {TestQuestion} from "./test-question";
import {TestResult} from "./test-result";
import {setIndividualWorkScore} from "../../data/scoreStorage";

const IndividualWorkTest = () => {
    //Берем номер самостоятельной работы из адресной строки
    const params = useParams();
    const workNumber = params?.id;

    //Загружаем самостоятельную работу и вопросы по ней из нашего "хранилища данных" (файла)
    const workQuestions = getIndividualWorkQuestions(workNumber);
    const workTheory = getIndividualWorkByNumber(workNumber);

    //Задаем начальные состояния для переменных
    //Текущий номер вопроса
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    //Количество правильных ответов
    let [score, setScore] = useState(0);
    //Признак, закончено ли выполнение работы
    const [isFinished, setIsFinished] = useState(false);
    //Выбраный вариант ответа (закрашивание точки ответа)
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    //Текущий вопрос
    const currentQuestion = workQuestions[currentQuestionNumber];

    //Ссылка на теорию для кнопки "Теория" в шапке
    const theoryButton = {
        link: `/individual-work/${workTheory?.id}`,
    };

    // Проверка наличия вопросов, если нет то выводим заглушку с текстом "Вопросы не найдены"
    if (!workQuestions || workQuestions.length === 0) {
        return (
            <Layout theoryButton={theoryButton}>
                <Box mt={6} p={4} borderWidth={1} borderRadius="md" bg="red.100">
                    <Text>Вопросы не найдены для работы {workNumber}</Text>
                </Box>
            </Layout>
        );
    }

    //Обработчик кнопки "Следующий вопрос"
    const handleNextQuestion = () => {
        if (!selectedAnswer) 
            return;

        if (selectedAnswer.isRight) {
            score += 1;
            setScore(score);
        }

        if (currentQuestionNumber + 1 < workQuestions.length) {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setSelectedAnswer(null); // Сброс выбранного ответа
        } else {
            setIsFinished(true);
            let percentScore = score / workQuestions.length;
            let roundedScore = Math.round(percentScore * 100) / 100;
            setIndividualWorkScore(workNumber, roundedScore);
        }
    };

    //Обработчик кнопки "Пройти снова"
    const handleRetry = () => {
        setCurrentQuestionNumber(0);
        setScore(0);
        setIsFinished(false);
        setSelectedAnswer(null);
    };

    return (
        <Layout theoryButton={theoryButton}>
            <VStack align="start" spacing={6} p={6}>
                {/* Заголовок с темой самостоятельной работы */}
                <Heading size="lg" textAlign="center" w="full">
                    {workTheory?.theme || "Самостоятельная работа"}
                </Heading>

                {/* Основной контент, если вопросы кончились - загружаем компонент с результатами теста "TestResult", 
                если нет - загружаем компонент вопроса "TestQuestion"*/}
                {!isFinished ? (
                    <TestQuestion
                        currentQuestion={currentQuestion}
                        selectedAnswer={selectedAnswer}
                        setSelectedAnswer={setSelectedAnswer}
                        onNextQuestion={handleNextQuestion}
                        isLastQuestion={currentQuestionNumber + 1 === workQuestions.length}
                    />
                ) : (
                    <TestResult
                        score={score}
                        total={workQuestions.length}
                        onRetry={handleRetry}
                    />
                )}
            </VStack>
        </Layout>
    );
};

export default IndividualWorkTest;
