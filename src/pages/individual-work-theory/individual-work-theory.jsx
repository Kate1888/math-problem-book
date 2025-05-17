import { useParams } from "react-router-dom";
import React from "react";
import { Box, VStack, Image, Flex, Text, Alert, AlertIcon } from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout";
import { getIndividualWorkByNumber } from "../../data/individual-works/works";

function IndividualWorkTheory() {
    let params = useParams();
    let workData = getIndividualWorkByNumber(params?.id);

    const testButton = {
        link: `/individual-work/${workData?.id}/test`
    };

    // Проверка наличия вопросов, если нет то выводим заглушку с текстом "Вопросы не найдены"
    if (!workData) {
        return (
            <Layout>
                <Box mt={6} p={4} borderWidth={1} borderRadius="md" bg="red.100">
                    <Text>Теория не найдена для работы {params?.id}</Text>
                </Box>
            </Layout>
        );
    }

    return (
        <Layout testButton={testButton}>
            <VStack align="start" spacing={6} p={6} w="100%">
                {/* Пояснительный текст с теорией */}
                <Alert.Root status="info" borderRadius="md" fontSize="lg">
                    <Alert.Indicator  />
                    <Text>
                        Внимательно изучите теорию, представленную ниже.
                        Как только будете готовы, нажмите кнопку <b>«Тренажер»</b> сверху, чтобы проверить свои знания.
                    </Text>
                </Alert.Root>

                {/* Картинка с теорией */}
                <Flex justify="center" w="100%">
                    <Image
                        src={workData.theoryImage}
                        alt="Теория"
                        maxWidth="100%"
                        objectFit="contain"
                        borderRadius="md"
                        boxShadow="md"
                    />
                </Flex>
            </VStack>
        </Layout>
    );
}

export default IndividualWorkTheory;