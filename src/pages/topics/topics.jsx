import { VStack, Box, Heading, Link, List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../shared-components/layout/layout";
import {getIndividualWorks} from "../../data/individual-works/works";
import {getControlWorks} from "../../data/control-works/works";

const TopicsPage = () => {
	const individualWorks = getIndividualWorks();
	const controlWorks = getControlWorks();

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
									{work.theme}
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
									{work.theme}
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