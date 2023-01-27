import {
    chakra,
    Box,
    Flex,
    HStack,
    useColorMode,
    Button,
    useDisclosure,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Links = [
    { name: "Clubs", route: "/clubs" },
    { name: "Events", route: "/events" },
    { name: "Profile", route: "/profile" },
    { name: "Admin", route: "/admin" },
];

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const logoColor = useColorModeValue("blue.600", "blue.400");
    const activeLinkColor = useColorModeValue("gray.100", "gray.700");

    const { user } = useUserAuth();

    const navigationItems = (
        Links.map((link) => {
            // hide admin link if user is not admin
            // hide profile link if user is not logged in
            if ((link.name === "Admin" && !user?.isAdmin) || (link.name === "Profile" && !user)) {
                return null;
            }
            return (
                <Button key={link.name} variant="ghost" as={NavLink} to={link.route}
                    _activeLink={{ bg: activeLinkColor }}>
                    {link.name}
                </Button>
            )
        })
    );

    return (
        <Box py={5} borderTop="2px" borderTopColor="blue.500">
            <Flex alignItems="center" justifyContent="space-between">
                <Button
                    aria-label={"Open Menu"}
                    display={{ md: !isOpen ? "none" : "inherit" }}
                    onClick={isOpen ? onClose : onOpen}
                >
                    {isOpen ? <MdOutlineClose /> : <FaBars />}
                </Button>

                <HStack spacing={8} alignItems={"center"}>
                    <Button variant="ghost" fontSize="xl" as={NavLink} to="/">
                        Ensa<chakra.span color={logoColor}>Clubs</chakra.span>
                    </Button>
                    <HStack as={"nav"} display={{ base: "none", md: "flex" }} >
                        {navigationItems}
                    </HStack>
                </HStack>

                <Button aria-label="Switch Theme" onClick={toggleColorMode}>
                    {colorMode === "light" ? <FaMoon /> : <FaSun />}
                </Button>
            </Flex>

            {isOpen ? (
                <Stack as={"nav"} pb={4} mt={3}>
                    {navigationItems}
                </Stack>
            ) : null}
        </Box>
    );
};

export default Navbar;