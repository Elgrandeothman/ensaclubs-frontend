import { Divider, Heading, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import EventsList from '../components/EventsList';
import Navbar from '../components/Navbar';

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch(`http://localhost:8080/events`)
            const json = await response.json()
            if (response.ok) {
                setEvents(json)
            }
        }
        fetchEvents()
    }, [])

    return (
        <div>

            <Navbar />

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Liste des événements</Heading>
                <Divider />
            </Stack>

            <EventsList events={events} />
        </div>
    );
}

export default Events;