import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Center, Collapse, Divider, Flex, Heading, IconButton, Image, ListItem, Stack, StackDivider, Stat, StatGroup, StatLabel, StatNumber, Text, UnorderedList, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { useUserAuth } from '../context/UserAuthContext';

const Club = () => {

    const [club, setClub] = useState({})
    const [events, setEvents] = useState([])

    const { isOpen, onToggle } = useDisclosure()

    const { id } = useParams()
    const { user, logIn } = useUserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClub = async () => {
            const response = await fetch(`http://localhost:8080/clubs/${id}`)
            const json = await response.json()
            if (response.ok) {
                await fetchClubEvents()
                setClub(json)
            }
        }
        const fetchClubEvents = async () => {
            const response = await fetch(`http://localhost:8080/events/club/${id}`)
            const json = await response.json()
            if (response.ok) {
                setEvents(json)
            }
        }
        fetchClub()
    }, [id])

    const onJoinClub = async () => {
        // if user is not logged in, redirect to login page
        if (!user) {
            navigate('/login')
            return
        }
        const response = await fetch(`http://localhost:8080/clubs/join/${club.id}/student/${user.id}`, {
            method: 'POST'
        })
        if (response.ok) {
            await logIn();
        }
    }

    const ContactInfo = () => (
        <ButtonGroup variant="ghost" w={"full"} justifyContent="center">
            <IconButton
                as="a"
                href="https://www.facebook.com/"
                aria-label="Facebook"
                icon={<FaFacebook fontSize="20px" />}
            />
            <IconButton
                as="a"
                href="https://www.instagram.com/"
                aria-label="instagram"
                icon={<FaInstagram fontSize="20px" />}
            />
            <IconButton
                as="a"
                href="https://www.linkedin.com/in/"
                aria-label="Linkedin"
                icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
                as="a"
                href="https://www.github.com/"
                aria-label="Github"
                icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
                as="a"
                href="https://www.google.com/"
                aria-label="Website"
                icon={<FaGlobe fontSize="20px" />}
            />
        </ButtonGroup>
    )

    return (
        <>
            <Navbar />

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Overview</Heading>
                <Divider />
            </Stack>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={5} mb={5}>

                <Stack w={{ md: "28%" }} direction={{ base: 'row', md: 'column' }} spacing={3}>
                    <Flex flex={1} justifyContent="center" alignItems="center" bg={useColorModeValue('white', 'gray.700')} p='4' borderRadius='lg' shadow='md'>
                        <Image src={club.image} alt={club.name} />
                    </Flex>

                    <Stack flex={1}>
                        <StatGroup>
                            <Stat>
                                <StatLabel>Members</StatLabel>
                                <StatNumber>{club.members ? club.members.length : 0}</StatNumber>
                            </Stat>

                            <Stat>
                                <StatLabel>Events</StatLabel>
                                <StatNumber>{events.length}</StatNumber>
                            </Stat>
                        </StatGroup>

                        {
                            user && user.clubs && user.clubs.find(c => c.id === club.id) ?
                                <Button colorScheme="blue" w="full" disabled>
                                    Joined
                                </Button>
                                :

                                <Button variant='outline' colorScheme="blue" w="full" onClick={onJoinClub}>
                                    Join Club
                                </Button>

                        }
                        <Button onClick={onToggle} variant='outline' colorScheme="teal" w="full">
                            Contact
                        </Button>
                        <Collapse in={isOpen} animateOpacity>
                            <ContactInfo />
                        </Collapse>
                    </Stack>
                </Stack>

                <Card w={{ md: "72%" }} size="lg">
                    <CardHeader pb={0}>
                        <Heading size='md'>{club.name}</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Summary
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {club.description}
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Activités
                                </Heading>
                                <UnorderedList pt='2' fontSize='sm'>
                                    <ListItem>Des formations assurés par des professionnels dans le domaine.</ListItem>
                                    <ListItem>Des conférences à thèmes ouverts.</ListItem>
                                    <ListItem>Des visites et des activités sociales à l'extérieur de l'ENSA.</ListItem>
                                    <ListItem>S'occuper des différents locaux de l'école.</ListItem>
                                    <ListItem>Autres activités proposées par les membres du bureau ou par les membres adhérents au club.</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Bureau
                                </Heading>
                                <UnorderedList pt='2' fontSize='sm'>
                                    <ListItem>Le bureau du club est composé de :</ListItem>
                                    <ListItem>Président : {club.president}</ListItem>
                                    <ListItem>Vice-Président : {club.president}</ListItem>
                                    <ListItem>Trésorier : {club.president}</ListItem>
                                    <ListItem>Secrétaire : {club.president}</ListItem>
                                </UnorderedList>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Evenements</Heading>
                <Divider />
            </Stack>

            {events.length === 0 ?
                <Center mb={5}>
                    <Text color='gray.500'>No events yet</Text>
                </Center>
                :
                <EventsList events={events} club={club} mb={5} />
            }
        </>
    );
}

export default Club;