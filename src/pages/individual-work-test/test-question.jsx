import {Box, Button, Heading, HStack, Image, Stack, Text, VStack} from "@chakra-ui/react";
import React from "react";

export const TestQuestion = ({
                                 currentQuestion,
                                 selectedAnswer,
                                 setSelectedAnswer,
                                 onNextQuestion,
                                 isLastQuestion,
                             }) => {
    let questionHtml = `${currentQuestion.order}. ${currentQuestion.text}`;

    return (
        <Box w="full">
            {/* Текущий вопрос */}
            <VStack align="start" spacing={4} mb={6} w="full">
                <Text size="md" dangerouslySetInnerHTML={{ __html: questionHtml }}/>

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

            {/* Разделение зон вопроса и ответов */}
            <Box borderBottom="1px solid" borderColor="gray.300" mb={4}/>

            {/* Варианты ответов */}
            <Stack spacing={4} w="full">
                {currentQuestion.answers.map((answer, index) => (
                    <HStack
                        key={index}
                        p={3}
                        borderWidth={1}
                        borderRadius="md"
                        w="full"
                        cursor="pointer"
                        _hover={{bg: "blue.50"}}
                        onClick={() => setSelectedAnswer(answer)}
                    >
                        <Box
                            borderWidth={1}
                            w={6}
                            h={6}
                            borderRadius="full"
                            bg={
                                selectedAnswer?.text === answer.text ? "blue.500" : "white"
                            }
                            borderColor="blue.500"
                        />
                        <Text dangerouslySetInnerHTML={{ __html: answer.text }}/>
                    </HStack>
                ))}
            </Stack>

            {/* Кнопка перехода к следующему вопросу */}
            <Button
                mt={6}
                colorScheme="blue"
                onClick={onNextQuestion}
                isDisabled={!selectedAnswer}
                w="full"
            >
                {isLastQuestion ? "Завершить тест" : "Следующий вопрос"}
            </Button>
        </Box>
    );
};