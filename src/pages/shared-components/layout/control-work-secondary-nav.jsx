import {Button, VStack} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

const ControlWorkSecondaryNav = ({id}) => {
    return (
        <VStack spacing={4} align="flex-start">
            <Button as={RouterLink} to={`control-work/${id}/test`} colorScheme="blue" variant="link">
                Тренажер
            </Button>
        </VStack>
    );
};

export default ControlWorkSecondaryNav;