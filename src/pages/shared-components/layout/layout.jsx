import { Box, Flex, Heading, HStack, Button, Link } from "@chakra-ui/react";

const Layout = ({ children, secondaryNav }) => {
    return (
        <Box bg="gray.50" minH="100vh">
            {/* Основной хедер */}
            <Box bg="blue.100" py={3}>
                <Flex
                    maxW="1200px"
                    mx="auto"
                    px={4}
                    align="center"
                    justify="space-between"
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
                        {secondaryNav && (
                            <Link href={secondaryNav.link} _hover={{ textDecoration: "none" }}>
                                <Button colorScheme="blue">Тренажер</Button>
                            </Link>
                        )}
                    </HStack>
                </Flex>
            </Box>

            {/* Контент */}
            <Box maxW="1200px" mx="auto" px={4} py={8}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;