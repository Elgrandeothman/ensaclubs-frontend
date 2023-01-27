import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";


const NewClub = ({ isOpen, onClose }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")

    return (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Club</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={{ base: 2, md: 4 }} w="full" direction={{ base: "column", md: "row" }}>
                        <FormControl isRequired flex="3">
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='Club name' onChange={e => setTitle(e.target.value)} value={title} />
                        </FormControl>

                        <FormControl isRequired flex="2">
                            <FormLabel>Category</FormLabel>
                            <Select placeholder='Select option' onChange={e => setCategory(e.target.value)} value={category}>
                                <option value='informatique'>Informatique</option>
                                <option value='social'>Social</option>
                                <option value='sports'>Sports</option>
                            </Select>
                        </FormControl>
                    </Stack>

                    <FormControl mt={2}>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder='Write a description for your club' onChange={e => setDescription(e.target.value)} value={description} />
                    </FormControl>

                    <FormControl mt={2}>
                        <FormLabel>Image</FormLabel>
                        <Input placeholder='Club image (url)' onChange={e => setImage(e.target.value)} value={image} />
                    </FormControl>

                </ModalBody>

                <ModalFooter>
                    <HStack>
                        <Text fontSize="sm" color="gray.500">
                            Clubs are moderated, a moderator will review your club before it is published.
                        </Text>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Create
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}
export default NewClub;