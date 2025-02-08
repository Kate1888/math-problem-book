import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Button,
    Heading,
    Image,
    VStack,
    Stack,
    Text,
    HStack,
} from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout";
import {getControlWork} from "../../data/control-works/works";
import getControlWorkQuestions from "../../data/control-works/questions";
import {setControlWorkScore} from "../../data/scoreStorage";

const ControlWorkTest = () => {
    const params = useParams();
    const workNumber = params.id;
    const workData = getControlWork(workNumber);
    const questions = getControlWorkQuestions(workNumber);

    const [answers, setAnswers] = useState({}); // Сохраняем ответы пользователя
    const [result, setResult] = useState(null); // Состояние для показа итогов
    const [selectedAnswer, setSelectedAnswer] = useState({}); // Для визуального выбора

    const theoryButton = {
        link: `/control-work/${workNumber}`,
    };

    const handleAnswerClick = (questionOrder, answerIndex) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionOrder]: answerIndex,
        }));
        setSelectedAnswer((prevSelected) => ({
            ...prevSelected,
            [questionOrder]: answerIndex,
        }));
    };

    const handleSubmit = () => {
        const correctAnswersCount = questions.reduce((count, question) => {
            const userAnswerIndex = answers[question.order];
            const isCorrect =
                userAnswerIndex !== undefined && question.answers[userAnswerIndex].isRight;
            return count + (isCorrect ? 1 : 0);
        }, 0);

        let percentScore = correctAnswersCount / questions.length;
        let roundedScore = Math.round(percentScore * 100) / 100;
        setControlWorkScore(workNumber, roundedScore);

        setResult({
            correct: correctAnswersCount,
            total: questions.length,
        });
    };

    const handleToStart = () => {
        setAnswers({});
        setResult(null);
        setSelectedAnswer({});
    };

    if (!workData) {
        return (
            <Layout>
                <Box mt={6} p={4} borderWidth={1} borderRadius="md" bg="red.100">
                    <Text>Контрольная работа не найдена!</Text>
                </Box>
            </Layout>
        );
    }

    return (
        <Layout theoryButton={theoryButton}>
            <VStack align="start" spacing={6} p={6}>
                {/* Заголовок контрольной работы */}
                <Heading size="lg" textAlign="center" w="full">
                    {workData.theme}
                </Heading>

                {/* Результаты */}
                {result ? (
                    <Box textAlign="center" p={6} borderWidth={1} borderRadius="md" w="full">
                        <Heading size="lg" mb={4}>
                            Результат
                        </Heading>
                        <Text fontSize="lg" mb={4}>
                            Вы ответили правильно на {result.correct} из {result.total} вопросов.
                        </Text>
                        <Button colorScheme="blue" onClick={handleToStart}>
                            Пройти снова
                        </Button>
                    </Box>
                ) : (
                    // Список вопросов
                    <VStack align="start" spacing={6} w="full">
                        {questions.map((question) => (
                            <Box key={question.order} w="full" p={4} borderWidth={1} borderRadius="md">
                                <Heading size="md" mb={4}>
                                    {question.order}. {question.text}
                                </Heading>

                                {/* Изображение, если есть */}
                                {question.image && (
                                    <Image
                                        src={question.image}
                                        alt="Иллюстрация"
                                        maxW="100%"
                                        objectFit="contain"
                                        borderRadius="md"
                                        mb={4}
                                    />
                                )}

                                {/* Варианты ответов */}
                                <Stack spacing={3}>
                                    {question.answers.map((answer, index) => (
                                        <HStack
                                            key={index}
                                            p={3}
                                            borderWidth={1}
                                            borderRadius="md"
                                            w="full"
                                            cursor="pointer"
                                            onClick={() => handleAnswerClick(question.order, index)}
                                            bg={
                                                selectedAnswer[question.order] === index ? "blue.100" : "white"
                                            }
                                            _hover={{ bg: "blue.50" }}
                                        >
                                            <Box
                                                borderWidth={2}
                                                borderRadius="full"
                                                boxSize={6}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                bg={
                                                    selectedAnswer[question.order] === index ? "blue.500" : "white"
                                                }
                                                borderColor="blue.500"
                                            />
                                            <Text>{answer.text}</Text>
                                        </HStack>
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                        <Button
                            colorScheme="blue"
                            onClick={handleSubmit}
                            isDisabled={answers.length < questions.length}
                            w="full"
                        >
                            Завершить тест
                        </Button>
                    </VStack>
                )}
            </VStack>
        </Layout>
    );
};

export default ControlWorkTest;