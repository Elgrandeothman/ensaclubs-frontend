import { Box, Divider, Heading, IconButton, SimpleGrid, Stack, useBreakpointValue, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ClubCard from '../components/ClubCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import NewClub from '../components/modals/NewClub';
import ClubsList from '../components/ClubsList';
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from 'react';

const Profile = () => {
    const [userClubs, setUserClubs] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure();
    const variantB = useBreakpointValue({ base: 'inline', md: null })
    // const user = { id: 1, name: "Oussama Regasse", username: "JustOssa", image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/245509536_111793047946677_7555609402602487882_n-removebg-preview.png" }

    const managedClubs = [
        { id: 1, name: "ENIAC club", category: "Informatique", president: "President 1", members: 10, image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/245509536_111793047946677_7555609402602487882_n-removebg-preview.png" },
    ]

    const { user } = useUserAuth();

    useEffect(() => {
        const fetchClubs = async () => {
            const res = await fetch('http://localhost:8080/students/' + user.id)
            const json = await res.json()
            if (res.ok) {
                setUserClubs(json.clubs)
            }
        }
        fetchClubs()
    }, [user.id])

    const SectionTitle = ({ title, ...props }) => (
        <Stack spacing={5} {...props}>
            <Divider />
            <Heading as="h4" size="md" mb={5} textAlign="center">{title}</Heading>
            <Divider />
        </Stack>
    )

    return (
        <>
            <Navbar />

            <SectionTitle title="Managed Clubs" mb={5} />

            <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} mb={5}>
                {managedClubs.map((club) => (
                    <Box position="relative" key={club.id}>
                        <ClubCard {...club} variant={variantB} />
                        <IconButton
                            aria-label='Edit'
                            icon={<FiEdit />}
                            size="xs"
                            position="absolute" top="5px" right="5px"
                        />
                    </Box>
                ))}
                <IconButton w="100%" minH="full" variant='outline' icon={<AiOutlinePlus />}
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                    colorScheme="blue" size="lg"
                    onClick={onOpen}
                />
            </SimpleGrid>

            <SectionTitle title="Joined Clubs" mb={5} />

            <ClubsList clubs={userClubs} />

            <NewClub isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default Profile;