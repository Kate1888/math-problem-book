import { Box, Flex, HStack, Button, Link, Container, Text, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

const Layout = ({ children, theoryButton, testButton }) => {
    return (
        <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
            <ScrollToTop />
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

                    {/* Кнопка профиля */}
                    <Link as={RouterLink} to="/profile" _hover={{ textDecoration: "none" }}>
                        <IconButton
                            aria-label="Профиль"
                            variant="ghost"
                            colorScheme="blue"
                            size="lg">
                            <LuUser size="lg" />
                        </IconButton>
                    </Link>
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