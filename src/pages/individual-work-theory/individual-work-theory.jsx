import {useParams} from "react-router-dom";
import React from "react";
import {Box, VStack, Heading, Text, Image} from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout";
import getIndividualWorks from "../../data/individual-works/works";

function IndividualWorkTheory() {
    let params = useParams();
    let workData = getIndividualWorks([params.id])[0];

    const testButton = {
        link: `/individual-work/${workData.id}/test`
    }

    return (
        <Layout testButton={testButton}>
            <VStack align="start" spacing={6} p={6}>
                {/* Заголовок */}
                <Heading size="xl">{workData.theme}</Heading>

                {/* Картинка */}
                <Box>
                    <Image
                        src={workData.theoryImage}
                        alt="Теория"
                        maxWidth="100%"
                        objectFit="contain"
                    />
                </Box>
            </VStack>
        </Layout>
    );
}

export default IndividualWorkTheory;