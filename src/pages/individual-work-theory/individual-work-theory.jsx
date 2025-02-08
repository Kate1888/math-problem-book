import { useParams } from "react-router-dom";
import React from "react";
import { Box, VStack, Image, Flex } from "@chakra-ui/react";
import Layout from "../shared-components/layout/layout";
import { getIndividualWorkByNumber } from "../../data/individual-works/works";

function IndividualWorkTheory() {
    let params = useParams();
    let workData = getIndividualWorkByNumber(params.id);

    const testButton = {
        link: `/individual-work/${workData.id}/test`
    };

    return (
        <Layout testButton={testButton}>
            <VStack align="start" spacing={6} p={6} w="100%">
                {/* Картинка, центрированная по горизонтали */}
                <Flex justify="center" w="100%">
                    <Image
                        src={workData.theoryImage}
                        alt="Теория"
                        maxWidth="100%"
                        objectFit="contain"
                    />
                </Flex>
            </VStack>
        </Layout>
    );
}

export default IndividualWorkTheory;