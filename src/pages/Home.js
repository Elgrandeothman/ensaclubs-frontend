import { chakra, Flex, Heading, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import HomeLink from "../components/HomeLink";
import { FaSchool, FaUserGraduate, FaUserTie } from "react-icons/fa";

const Home = () => {
    const logoColor = useColorModeValue("blue.600", "blue.400");

    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" h="100vh">
            <Heading as="h2" size="xl" textAlign="center" mb={10}>
                Bienvenue sur Ensa<chakra.span color={logoColor}>Clubs</chakra.span>
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                <HomeLink name="Espace Clubs" url="clubs" icon=<FaSchool fontSize="20px" /> />
                <HomeLink name="Espace étudiants" url="profile" icon=<FaUserGraduate fontSize="20px" /> />
                <HomeLink name="Espace administration" url="admin" icon=<FaUserTie fontSize="20px" /> />
            </SimpleGrid>

            {/* Footer */}
            <Text textAlign="center" color="gray.500" mt={10}>
                <chakra.span color="blue.500">EnsaClubs</chakra.span> est une plateforme de gestion des clubs de l'ENSA Safi.
            </Text>

        </Flex>
    );
}

export default Home;