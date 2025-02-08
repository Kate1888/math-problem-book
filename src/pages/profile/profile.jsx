import { Box, Text, VStack, Heading } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Layout from "../shared-components/layout/layout";
import { getControlWorksScore, getIndividualWorksScore } from "../../data/scoreStorage";

const ProfilePage = () => {
    const individualWorkStats = getIndividualWorksScore();
    const controlWorkStats = getControlWorksScore();

    return (
        <Layout>
            <Box maxW="800px" mx="auto" textAlign="center" mb={8}>
                <Heading as="h1" size="xl" mb={2}>Профиль пользователя</Heading>
                <Text fontSize="lg" color="gray.600">
                    Здесь отображается ваша статистика по самостоятельным и контрольным работам.
                    Вы можете увидеть, как менялись ваши результаты, и следить за прогрессом.
                </Text>
            </Box>

            <VStack spacing={10} align="stretch">
                <Box p={6} shadow="md" borderRadius="lg" bg="white">
                    <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
                        📊 Статистика по самостоятельным работам
                    </Text>
                    {individualWorkStats.length > 0 ? (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={individualWorkStats}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="id" />
                                <YAxis domain={[0, 1]} tickFormatter={(value) => `${value * 100}%`} />
                                <Tooltip formatter={(value) => `${(value * 100).toFixed(0)}%`} />
                                <Legend />
                                <Line type="monotone" dataKey="lastScore" stroke="#4299E1" name="Последний балл" />
                                <Line type="monotone" dataKey="maxScore" stroke="#48BB78" name="Максимальный балл" />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <Text textAlign="center" color="gray.500">Нет данных по самостоятельным работам.</Text>
                    )}
                </Box>

                <Box p={6} shadow="md" borderRadius="lg" bg="white">
                    <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
                        📈 Статистика по контрольным работам
                    </Text>
                    {controlWorkStats.length > 0 ? (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={controlWorkStats}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="id" />
                                <YAxis domain={[0, 1]} tickFormatter={(value) => `${value * 100}%`} />
                                <Tooltip formatter={(value) => `${(value * 100).toFixed(0)}%`} />
                                <Legend />
                                <Line type="monotone" dataKey="lastScore" stroke="#4299E1" name="Последний балл" />
                                <Line type="monotone" dataKey="maxScore" stroke="#48BB78" name="Максимальный балл" />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <Text textAlign="center" color="gray.500">Нет данных по контрольным работам.</Text>
                    )}
                </Box>
            </VStack>
        </Layout>
    );
};

export default ProfilePage;
