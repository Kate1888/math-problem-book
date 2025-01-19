import { VStack, Box, Heading, Link, List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../shared-components/layout/layout";

const individualWorks = [
	{ id: 1, title: "По теме действия с натуральными числами" },
	{ id: 2, title: "По теме числовые и буквенные выражения" },
	{ id: 3, title: "По теме признаки делимости натуральных чисел" },
	{ id: 4, title: "По теме простые и составные числа" },
	{ id: 5, title: "По теме нахождение наибольшего общего делителя" }
];

const controlWorks = [
	{ id: 1, title: "По теме натуральные числа" },
	{ id: 2, title: "По теме геометрические фигуры, фигуры на плоскости" },
	{ id: 3, title: "По теме дроби" },
	{ id: 4, title: "По теме рациональные числа" },
	{ id: 5, title: "Итоговая контрольная работа" },
];

const TopicsPage = () => {
	return (
		<Layout>
			<VStack align="start" spacing={8}>
				{/* Самостоятельные работы */}
				<Box>
					<Heading size="lg" mb={4}>
						Самостоятельные работы
					</Heading>
					<List.Root spacing={2}>
						{individualWorks.map((work) => (
							<List.Item key={work.id}>
								<Link
									as={RouterLink}
									to={`/individual-work/${work.id}`}
									color="blue.500"
									_hover={{ textDecoration: "underline" }}
								>
									{work.title}
								</Link>
							</List.Item>
						))}
					</List.Root>
				</Box>

				{/* Контрольные работы */}
				<Box>
					<Heading size="lg" mb={4}>
						Контрольные работы
					</Heading>
					<List.Root spacing={2}>
						{controlWorks.map((work) => (
							<List.Item key={work.id}>
								<Link
									as={RouterLink}
									to={`/control-work/${work.id}`}
									color="blue.500"
									_hover={{ textDecoration: "underline" }}
								>
									{work.title}
								</Link>
							</List.Item>
						))}
					</List.Root>
				</Box>
			</VStack>
		</Layout>
	);
};

export default TopicsPage;