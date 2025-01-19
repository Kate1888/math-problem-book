import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Box, Heading, VStack, List, ListItem, Link } from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout"; // Подключаем Layout
import getControlWork from "../../data/control-works/works"; // Получение данных контрольной работы
import getIndividualWorks from "../../data/individual-works/works"; // Получение данных самостоятельных работ

const ControlWorkTheory = () => {
    const params = useParams();
    const workNumber = Number(params.id);
    const workData = getControlWork(params.id);
    const individualWorks = getIndividualWorks(workData.individualWorks);

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
                {/* Заголовок контрольной работы */}
                <Heading size="lg" textAlign="center" w="full">
                    {workData.theme}
                </Heading>

                {/* Список тем для самостоятельных работ */}
                <Box w="full">
                    <Heading size="md" mb={4}>
                        Список тем для самостоятельных работ:
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