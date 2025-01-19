import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Box, Heading, Text, VStack,} from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout"; // Подключаем Layout
import getIndividualWorkQuestions from "../../data/individual-works/questions";
import {getIndividualWorkByNumber} from "../../data/individual-works/works";
import {TestQuestion} from "./test-question";
import {TestResult} from "./test-result";

const IndividualWorkTest = () => {
    const params = useParams();
    const workNumber = params.id;
    const workQuestions = getIndividualWorkQuestions(workNumber);
    const workData = getIndividualWorkByNumber(workNumber);

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const theoryButton = {
        link: `/individual-work/${workData.id}`,
    };

    // Проверка наличия вопросов
    if (!workQuestions || workQuestions.length === 0) {
        return (
            <Layout theoryButton={theoryButton}>
                <Box mt={6} p={4} borderWidth={1} borderRadius="md" bg="red.100">
                    <Text>Вопросы не найдены для работы {workNumber}</Text>
                </Box>
            </Layout>
        );
    }

    const currentQuestion = workQuestions[currentQuestionNumber];

    const handleNextQuestion = () => {
        if (!selectedAnswer) return;

        if (selectedAnswer.isRight) {
            setScore(score + 1);
        }

        if (currentQuestionNumber + 1 < workQuestions.length) {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setSelectedAnswer(null); // Сброс выбранного ответа
        } else {
            setIsFinished(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionNumber(0);
        setScore(0);
        setIsFinished(false);
        setSelectedAnswer(null);
    };

    return (
        <Layout theoryButton={theoryButton}>
            <VStack align="start" spacing={6} p={6}>
                {/* Заголовок теста */}
                <Heading size="lg" textAlign="center" w="full">
                    {workData?.theme || "Самостоятельная работа"}
                </Heading>

                {/* Основной контент */}
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
