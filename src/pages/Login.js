import { Container, Heading, chakra, Stack, FormControl, Input, Button, FormLabel, Checkbox, Text, HStack, Link, useColorModeValue, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {

    const InputBg = useColorModeValue('whibluepha.800', 'blackAlpha.300')
    const textColor = useColorModeValue('gray.600', 'gray.300')

    const toast = useToast()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/tickets";

    const { logIn } = useUserAuth();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        toast.closeAll()
        try {
            await logIn(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err);

            if (err.data) {
                toast({
                    title: "Validation errors",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
        }
        setLoading(false);
    };

    return (
        <Container maxW="md" h="100vh" px={8}
            display="flex" justifyContent="center" alignItems="center" flexDir="column"
        >


            <Heading size="3xl" fontWeight="semibold">
                Ensa<chakra.span color="blue.400">Clubs</chakra.span>
            </Heading>
            <Text color={textColor} mt={2}>Log in to your account</Text>


            <Stack as="form" spacing={4} mt={8} w="full" onSubmit={handleLogin}>

                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="text" placeholder="Enter your email" bg={InputBg}
                        onChange={e => setEmail(e.target.value)} value={email}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password" placeholder="********" bg={InputBg}
                        onChange={e => setPassword(e.target.value)} value={password}
                    />
                </FormControl>

                <HStack justifyContent='space-between'>
                    <Checkbox colorScheme="blue">Remember me</Checkbox>
                    <Link color="blue.500">Forgot password?</Link>
                </HStack>

                <Button type="submit" colorScheme="blue" isLoading={loading}>
                    Login
                </Button>
            </Stack>

        </Container>
    );
}

export default Login;