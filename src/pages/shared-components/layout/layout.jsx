import { Box, Flex, HStack, Button, Link, Container, Text } from "@chakra-ui/react";

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
                        <Link href="/" _hover={{ textDecoration: "none" }}>
                            <Button variant="outline" colorScheme="blue">
                                Главная
                            </Button>
                        </Link>
                        <Link href="/topics" _hover={{ textDecoration: "none" }}>
                            <Button variant="outline" colorScheme="blue">
                                Оглавление
                            </Button>
                        </Link>
                        {theoryButton && (
                            <Link href={theoryButton.link} _hover={{ textDecoration: "none" }}>
                                <Button colorScheme="blue">Теория</Button>
                            </Link>
                        )}
                        {testButton && (
                            <Link href={testButton.link} _hover={{ textDecoration: "none" }}>
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