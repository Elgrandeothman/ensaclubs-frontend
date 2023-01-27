import { Avatar, Box, Button, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import moment from "moment";

const DemandeModal = ({ isOpen, onClose, demande }) => {

    // const demande = demandes[0];
    const UserClubAvatar = ({ user, club }) => (
        <Flex>
            <Avatar name={user.firstName + ' ' + user.lastName} src={user.image} />
            <Box ml='3'>
                <Text fontWeight='bold'>{user.firstName + ' ' + user.lastName}</Text>
                <Text fontSize='sm'>{club.name}</Text>
            </Box>
        </Flex>
    )

    if (!demande) return null;

    console.log(demande);

    return (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{demande.object}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack justifyContent="space-between" alignItems="center">
                        <UserClubAvatar user={demande.creator} club={demande.club} />
                        <Text>{moment(demande.updatedAt).fromNow()}</Text>
                    </HStack>

                    <Box mt={4} p={4} borderWidth='1px' borderRadius='lg'>
                        <Text>{demande.details}</Text>
                    </Box>

                </ModalBody>

                <ModalFooter>
                    <Button mr={3} colorScheme="green" onClick={onClose}>Accepter</Button>
                    <Button colorScheme="red" onClick={onClose}>Refuser</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}
export default DemandeModal;