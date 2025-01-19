import { Box, Flex, HStack, Button, Link, Container, Text } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

const Layout = ({ children, theoryButton, testButton }) => {
    return (
        <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
            {/* Основной хедер */}
            <Box bg="blue.100" py={3} w="100%">
                <Flex
                    maxW="1200px"
                    mx="auto"
                    px={4}
                    align="center"
                    justify="space-between"
                    w="100%"
                >
                    <HStack spacing={4}>
                        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
                            <Button variant="outline" colorScheme="blue">
                                Главная
                            </Button>
                        </Link>
                        <Link as={RouterLink} to="/topics" _hover={{ textDecoration: "none" }}>
                            <Button variant="outline" colorScheme="blue">
                                Оглавление
                            </Button>
                        </Link>
                        {theoryButton && (
                            <Link as={RouterLink} to={theoryButton.link} _hover={{ textDecoration: "none" }}>
                                <Button colorScheme="blue">Теория</Button>
                            </Link>
                        )}
                        {testButton && (
                            <Link as={RouterLink} to={testButton.link} _hover={{ textDecoration: "none" }}>
                                <Button colorScheme="blue">Тренажер</Button>
                            </Link>
                        )}
                    </HStack>
                </Flex>
            </Box>

            {/* Контент */}
            <Box as="main" flex="1" w="100%" maxW="1200px" mx="auto" px={4} py={8}>
                {children}
            </Box>

            {/* Подвал */}
            <Box bg="gray.800" color="white" py={6} w="100%">
                <Container maxW="container.xl" display="flex" justifyContent="center" w="100%">
                    <Text>&copy; 2025. Платформа для обучения. Екатерина Коханчик.</Text>
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;