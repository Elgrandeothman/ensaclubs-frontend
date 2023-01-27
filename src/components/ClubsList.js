import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import ClubCard from "./ClubCard";

const ClubsList = ({ clubs, variant, ...props }) => {

    const variantB = useBreakpointValue({ base: 'inline', md: variant })

    return (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} {...props}>
            {clubs.map((club) => (
                <ClubCard variant={variantB} key={club.id} {...club} />
            ))}
        </SimpleGrid>
    );

}

export default ClubsList;