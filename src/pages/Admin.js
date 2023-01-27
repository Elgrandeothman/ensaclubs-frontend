import { Divider, Heading, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ClubsList from '../components/ClubsList';
import DemandesTable from '../components/DemandesTable';
import Navbar from '../components/Navbar';
import StudentsTable from '../components/StudentsTable';
import { useClubsContext } from '../context/ClubsContext';

const Admin = () => {

    const { clubs, dispatch } = useClubsContext()
    const [demandes, setDemandes] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchClubs = async () => {
            const response = await fetch('http://localhost:8080/clubs')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_CLUBS', payload: json })
            }
        }
        const fetchDemandes = async () => {
            const response = await fetch('http://localhost:8080/demandes')
            const json = await response.json()
            if (response.ok) {
                setDemandes(json)
            }
        }
        const fetchStudents = async () => {
            const response = await fetch('http://localhost:8080/students')
            const json = await response.json()
            if (response.ok) {
                setStudents(json)
            }
        }
        fetchClubs()
        fetchDemandes()
        fetchStudents()
    }, [dispatch, setDemandes])


    return (
        <>
            <Navbar />

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Gestion de clubs</Heading>
                <Divider />
            </Stack>

            <ClubsList clubs={clubs} variant="inline" mb={5} />

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Gestion de demandes</Heading>
                <Divider />
            </Stack>

            <DemandesTable data={demandes} loading={false} />

            <Stack spacing={5} mb={5}>
                <Divider />
                <Heading as="h4" size="md" mb={5} textAlign="center">Gestion des étudiants</Heading>
                <Divider />
            </Stack>

            <StudentsTable data={students} loading={false} />


        </>
    );
}

export default Admin;