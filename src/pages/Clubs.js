import { Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import ClubsList from '../components/ClubsList';
import Navbar from '../components/Navbar';
// import { clubs as fakeClubs } from '../fakeData';
import { useClubsContext } from '../context/ClubsContext';

const Clubs = () => {

    const { clubs, dispatch } = useClubsContext()

    useEffect(() => {
        const fetchClubs = async () => {
            const response = await fetch('http://localhost:8080/clubs')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_CLUBS', payload: json })
            }
        }
        fetchClubs()
    }, [dispatch])

    console.log(clubs)

    return (
        <div>

            <Navbar />

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Liste des clubs</Heading>
                <Divider />
            </Stack>

            <Text mb={5}>La liste des clubs actifs aujourdhui à l'ENSA Safi :</Text>

            <ClubsList clubs={clubs} />
        </div>
    );
}

export default Clubs;