import { Box, Text, VStack } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Layout from "../shared-components/layout/layout";
import {getControlWorksScore, getIndividualWorksScore} from "../../data/scoreStorage";

const ProfilePage = () => {
    const individualWorkStats = getIndividualWorksScore();
    const controlWorkStats = getControlWorksScore();

    return (
        <Layout>
            <VStack spacing={8} align="stretch">
                <Box>
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>
                        Статистика по самостоятельным работам
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
                        <Text>Нет данных по самостоятельным работам</Text>
                    )}
                </Box>

                <Box>
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>
                        Статистика по контрольным работам
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
                        <Text>Нет данных по контрольным работам</Text>
                    )}
                </Box>
            </VStack>
        </Layout>
    );
};

export default ProfilePage;
