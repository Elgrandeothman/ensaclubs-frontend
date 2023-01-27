import { Box, Heading, IconButton, LinkBox, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeLink = ({ name, url, icon }) => {

    return (
        <LinkBox as="article">
            <Box
                w="100%"
                p={4}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                borderRadius={5}
                borderWidth="1px"
                transition=".5s"
                cursor="pointer"
                display="flex"
                role="group"
                _hover={{
                    borderColor: "blue.500"
                }}
            >
                <IconButton
                    zIndex={1}
                    aria-label={name}
                    mr={3}
                    _groupHover={{ color: "blue.500" }}
                    icon={icon}
                />
                <Box>
                    <LinkOverlay as={Link} to={url}>
                        <Heading as="h2" size="sm">
                            {name}
                        </Heading>
                    </LinkOverlay>
                    <Text mt={1} fontSize="sm">
                        {name}
                    </Text>
                </Box>
            </Box>
        </LinkBox>
    )
}

export default HomeLink;