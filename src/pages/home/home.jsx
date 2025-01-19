import {Box, Button, Heading, Text, VStack, Container, Link} from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout"; // Предположим, что Layout у нас уже есть

const LandingPage = () => {
	return (
		<Layout>
			<Box>
				{/* Hero Section */}
				<Box py={20} textAlign="center">
					<Heading size="2xl" mb={4}>Добро пожаловать в платформу для подготовки и тестирования!</Heading>
					<Text fontSize="lg" mb={6}>
						Получите доступ к теоретическим материалам, тренажерам и тестам, чтобы подготовиться к контрольным и самостоятельным работам.
						С нами подготовка будет легкой и эффективной!
					</Text>
				</Box>

				{/* Описание возможностей приложения */}
				<Box id="features" py={20}>
					<Container maxW="container.xl">
						<Heading size="lg" textAlign="center" mb={6}>
							Возможности платформы
						</Heading>
						<VStack spacing={6} align="center">
							<Box bg="white" p={6} borderRadius="md" shadow="md" w="full" maxW="md">
								<Heading size="md" mb={4}>Теоретическая подготовка</Heading>
								<Text fontSize="lg">
									Пройдите материалы по каждой теме, чтобы подготовиться к тестам и контрольным работам. Мы предлагаем подробные и актуальные теории по каждой теме.
								</Text>
							</Box>
							<Box bg="white" p={6} borderRadius="md" shadow="md" w="full" maxW="md">
								<Heading size="md" mb={4}>Тренажеры для контрольных работ</Heading>
								<Text fontSize="lg">
									Используйте тренажеры для проверки своих знаний перед сдачей контрольной работы. Тренажеры помогут вам подготовиться к экзамену, имитируя реальную контрольную работу.
								</Text>
							</Box>
							<Box bg="white" p={6} borderRadius="md" shadow="md" w="full" maxW="md">
								<Heading size="md" mb={4}>Прохождение тестов</Heading>
								<Text fontSize="lg">
									После теоретической подготовки и тренажеров переходите к реальным тестам, чтобы увидеть свой прогресс и улучшить результаты.
								</Text>
							</Box>
						</VStack>
					</Container>
				</Box>

				{/* Призыв к действию */}
				<Box py={20} textAlign="center">
					<Heading size="lg" mb={4}>Готовы начать?</Heading>
					<Text fontSize="xl" mb={6}>
						Пройдите теоретическую подготовку и тренажеры, чтобы успешно сдать контрольные работы и экзамены.
					</Text>
					<Link href="/topics" _hover={{ textDecoration: "none" }}>
						<Button colorScheme="blue" size="lg" >
							Перейти к изучению
						</Button>
					</Link>
				</Box>
			</Box>
		</Layout>
	);
};

export default LandingPage;