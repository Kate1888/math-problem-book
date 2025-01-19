import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../shared-components/layout/layout";

const HomePage = () => {
	return (
		<Layout>
			<VStack spacing={6} textAlign="center">
				<Heading>Добро пожаловать в тренажер по математике для 6 класса</Heading>
				<Text fontSize="lg" color="gray.600">
					Улучшай свои математические знания с помощью самостоятельных и контрольных работ.
				</Text>
				<Link as={RouterLink} to="/topics">
					<Button colorScheme="blue" size="lg">
						Перейти к оглавлению
					</Button>
				</Link>
			</VStack>
		</Layout>
	);
};

export default HomePage;