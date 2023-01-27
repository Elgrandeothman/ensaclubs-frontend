import { Box, Heading, Image, LinkBox, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ClubCard = ({ id, name, category, image, variant }) => {

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
                flexDirection={variant !== "inline" && "column"}
                role="group"
                _hover={{ borderColor: "blue.500" }}
                textAlign={variant !== "inline" && "center"}
            >
                <Image
                    objectFit='cover'
                    borderRadius="md"
                    h={variant === "inline" ? "40px" : "70px"}
                    w={variant === "inline" ? "40px" : "auto"}
                    src={image}
                    alt="Club logo"
                    mb={variant !== "inline" && 3}
                    mr={variant === "inline" && 3}
                />
                <Box>
                    <LinkOverlay as={Link} to={`/clubs/${id}`}>
                        <Heading as="h2" size="sm">
                            {name}
                        </Heading>
                    </LinkOverlay>
                    <Text mt={1} fontSize="sm">
                        {category}
                    </Text>
                </Box>
            </Box>
        </LinkBox>
    )
}

export default ClubCard;