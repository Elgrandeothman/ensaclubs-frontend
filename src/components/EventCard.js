import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Event = ({ event, club }) => {

    if (!club) {
        club = event.club
    }

    return (
        <Card>
            <CardHeader pb={0}>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={club.name} src={club.image} />
                    <Box>
                        <Heading size='sm'>{event.title}</Heading>
                        <Text>{club.name}</Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text noOfLines={3}>
                    {event.details}
                </Text>
            </CardBody>
            <Image
                mb={5}
                h='350px'
                objectFit='cover'
                src={event.image}
                alt='Chakra UI'
            />
        </Card>
    );


}

export default Event;