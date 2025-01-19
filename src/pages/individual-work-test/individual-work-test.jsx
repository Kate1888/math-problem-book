import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout"; // Подключаем Layout
import getIndividualWorkQuestions from "../../data/individual-works/questions";
import getIndividualWorks from "../../data/individual-works/works";

const TestResult = ({ score, total, onRetry }) => {
    return (
        <Box
            textAlign="center"
            p={6}
            borderWidth={1}
            borderRadius="md"
            boxShadow="lg"
            w="full"
        >
            <Heading size="lg" mb={4}>
                Тест завершен!
            </Heading>
            <Text fontSize="lg" mb={4}>
                Ваш результат: <strong>{score}</strong> из <strong>{total}</strong>
            </Text>
            <Button colorScheme="blue" onClick={onRetry}>
                Пройти снова
            </Button>
        </Box>
    );
};

const IndividualWorkTest = () => {
    const params = useParams();
    const workNumber = params.id;
    const workQuestions = getIndividualWorkQuestions(workNumber);
    const workData = getIndividualWorks([workNumber])[0];

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const theoryButton = {
        link: `/individual-work/${workData.id}`
    }

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
        if (selectedAnswer && selectedAnswer.isRight) {
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
                    <Box w="full">
                        {/* Текущий вопрос */}
                        <VStack align="start" spacing={4} mb={6} w="full">
                            <Heading size="md">
                                {currentQuestion.order}. {currentQuestion.text}
                            </Heading>

                            {/* Изображение */}
                            {currentQuestion.image && (
                                <Image
                                    src={currentQuestion.image}
                                    alt="Question related"
                                    maxW="100%"
                                    objectFit="contain"
                                    borderRadius="md"
                                    boxShadow="sm"
                                />
                            )}
                        </VStack>

                        {/* Разделение вопроса и ответов */}
                        <Box borderBottom="1px solid" borderColor="gray.300" mb={4} />

                        {/* Ответы */}
                        <Stack spacing={4} w="full">
                            {currentQuestion.answers.map((answer, index) => (
                                <HStack
                                    key={index}
                                    p={3}
                                    borderWidth={1}
                                    borderRadius="md"
                                    w="full"
                                    cursor="pointer"
                                    _hover={{ bg: "blue.50" }}
                                    onClick={() => setSelectedAnswer(answer)}
                                >
                                    <Box
                                        borderWidth={1}
                                        w={6}
                                        h={6}
                                        borderRadius="full"
                                        bg={selectedAnswer?.text === answer.text ? "blue.500" : "white"}
                                        borderColor="blue.500"
                                    />
                                    <Text>{answer.text}</Text>
                                </HStack>
                            ))}
                        </Stack>

                        {/* Кнопка перехода к следующему вопросу */}
                        <Button
                            mt={6}
                            colorScheme="blue"
                            onClick={handleNextQuestion}
                            isDisabled={!selectedAnswer}
                            w="full"
                        >
                            {currentQuestionNumber + 1 < workQuestions.length
                                ? "Следующий вопрос"
                                : "Завершить тест"}
                        </Button>
                    </Box>
                ) : (
                    // Результаты теста
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
