import { SimpleGrid } from "@chakra-ui/react";
import EventCard from "./EventCard";

const EventsList = ({ events, club, ...props }) => {

    return (
        <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3 }} {...props}>
            {events.map((event) => (
                <EventCard key={event.id} event={event} club={club} />
            ))}
        </SimpleGrid>
    );

}

export default EventsList;