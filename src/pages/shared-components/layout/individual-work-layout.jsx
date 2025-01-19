import React from "react";
import {Button, VStack} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

const IndividualWorkSecondaryNav = ({id}) => {
    return (
        <VStack spacing={4} align="flex-start">
            <Button as={RouterLink} to={`individual-work/${id}/test`} colorScheme="blue" variant="link">
                Тренажер
            </Button>
        </VStack>
    );
};

export default IndividualWorkSecondaryNav;