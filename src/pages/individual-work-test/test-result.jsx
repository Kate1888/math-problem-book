import {Box, Button, Heading, Text} from "@chakra-ui/react";
import React from "react";

export const TestResult = ({score, total, onRetry}) => {
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