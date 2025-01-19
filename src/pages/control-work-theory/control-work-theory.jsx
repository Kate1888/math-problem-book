import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Box, Heading, VStack, List, Link, Text } from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout"; // Подключаем Layout
import {getControlWork} from "../../data/control-works/works"; // Получение данных контрольной работы
import {getIndividualWorksByNumbers} from "../../data/individual-works/works"; // Получение данных самостоятельных работ

const ControlWorkTheory = () => {
    const params = useParams();
    const workNumber = Number(params.id);
    const workData = getControlWork(params.id);
    const individualWorks = getIndividualWorksByNumbers(workData.individualWorks);

    if (!workData) {
        return (
            <Layout>
                <Box mt={6} p={4} borderWidth={1} borderRadius="md" bg="red.100">
                    <Heading size="md" textAlign="center">
                        Контрольная работа не найдена!
                    </Heading>
                </Box>
            </Layout>
        );
    }

    const testButton = {
        link: `/control-work/${workNumber}/test`,
    };

    return (
        <Layout testButton={testButton}>
            <VStack align="start" spacing={6} p={6}>
                <VStack align="start" spacing={6} p={6}>
                    {/* Заголовок теории */}
                    <Heading size="lg" textAlign="center" w="full">
                        Теоретическая подготовка для контрольной работы
                    </Heading>

                    {/* Описание */}
                    <Text fontSize="lg" mb={6}>
                        Контрольная работа охватывает несколько важных тем, которые требуют хорошего понимания теоретического материала.
                        Для подготовки к контрольной работе вам рекомендуется пройти самостоятельные работы, связанные с каждой темой, чтобы лучше подготовиться.
                        Ниже представлен список тем, с которыми вам предстоит ознакомиться. Каждая тема включает ссылки на самостоятельные работы, которые помогут вам углубиться в теорию.
                        Нажмите на тему, чтобы перейти к соответствующему материалу.
                    </Text>
                    {/* Дополнительная информация о начале тренажера */}
                    <Text fontSize="lg" mb={6}>
                        Чтобы начать прохождение контрольной работы, нажмите на кнопку <strong>"Тренажер"</strong> сверху.
                    </Text>
                </VStack>

                {/* Список тем для самостоятельных работ */}
                <Box w="full" align="start" spacing={4}>
                    <Heading size="md" mb={4}>
                        Список самостоятельных работ для подготовки к контрольной работе по теме "{workData.theme}":
                    </Heading>
                    <List.Root spacing={4}>
                        {individualWorks.map((individualWork) => (
                            <List.Item
                                key={individualWork.id}
                                p={3}
                                borderWidth={1}
                                borderRadius="md"
                                _hover={{ bg: "blue.50" }}
                            >
                                <Link as={RouterLink} to={`/individual-work/${individualWork.id}`}>
                                    <Heading size="sm">{individualWork.theme}</Heading>
                                </Link>
                            </List.Item>
                        ))}
                    </List.Root>
                </Box>
            </VStack>
        </Layout>
    );
};

export default ControlWorkTheory;