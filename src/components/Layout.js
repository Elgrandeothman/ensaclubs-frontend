import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <Container maxW="container.lg">

            <Outlet />

        </Container>
    );
}

export default Layout;