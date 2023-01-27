import { Text, Badge, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, Select, HStack, Avatar, Flex, Box, Spinner, useDisclosure } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import moment from "moment";
import DemandeModal from "./modals/DemandeModal";

const DemandesTable = ({ data, loading }) => {

    const tableBg = useColorModeValue('whiteAlpha.800', 'blackAlpha.300')
    const tableRowHover = useColorModeValue('gray.100', 'blackAlpha.300')

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [demande, setDemande] = useState(null)

    const showDemande = (demandeData) => {
        setDemande(demandeData)
        onOpen()
    }

    // utils
    const getStatus = (status) => {
        switch (status) {
            case true:
                return <Badge colorScheme='green'>Accepted</Badge>
            case false:
                return <Badge colorScheme='red'>Refused</Badge>
            default:
                return <Badge colorScheme='orange'>Pending</Badge>
        }
    }

    const UserAvatar = ({ user }) => (
        <Flex>
            <Avatar name={user.name} src={user.image} />
            <Box ml='3'>
                <Text fontWeight='bold'>{user.firstName + ' ' + user.lastName}</Text>
                <Text fontSize='sm'>{user.email || user.phone}</Text>
            </Box>
        </Flex>
    )

    const columns = useMemo(
        () => [
            { Header: 'ID', accessor: 'id', Cell: ({ value }) => <span title={value}>{value}</span> },
            { Header: 'Object', accessor: 'object' },
            { Header: 'Requester', accessor: 'creator', Cell: ({ value }) => <UserAvatar user={value} /> },
            { Header: 'Club', accessor: 'club', Cell: ({ value }) => value.name },
            { Header: 'Status', accessor: 'accepted', Cell: ({ value }) => getStatus(value) },
            { Header: 'Updated', accessor: 'updatedAt', isNumeric: true, Cell: ({ value }) => (value && moment(value).fromNow()) },
        ], []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageIndex: 0, sortBy: [{ id: 'updatedAt', desc: true }] }, }, useSortBy, usePagination)

    return (
        <>

            <TableContainer bg={tableBg}
                border="1px" borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')} borderRadius="md">
                <Table variant='simple' {...getTableProps()}>
                    <Thead>

                        {   // Loop over the header rows
                            headerGroups.map(headerGroup => (
                                // Apply the header row props
                                <Tr {...headerGroup.getHeaderGroupProps()}>
                                    {// Loop over the headers in each row
                                        headerGroup.headers.map(column => (
                                            // Apply the header cell props
                                            <Th {...column.getHeaderProps()} isNumeric={column.isNumeric}>
                                                {// Render the header
                                                    column.render('Header')}
                                            </Th>
                                        ))}
                                </Tr>
                            ))}
                    </Thead>

                    {/* Apply the table body props */}
                    <Tbody {...getTableBodyProps()}>
                        {   // Loop over the table rows
                            loading ? <Tr>
                                <Td colSpan={7} textAlign="center">
                                    <Spinner />
                                </Td>
                            </Tr>
                                :
                                page.length ? page.map(row => {
                                    // Prepare the row for display
                                    prepareRow(row)
                                    return (
                                        // Apply the row props
                                        <Tr _hover={{ bg: tableRowHover }} onClick={() => showDemande(row.original)} {...row.getRowProps()}>
                                            {// Loop over the rows cells
                                                row.cells.map(cell => {
                                                    // Apply the cell props
                                                    return (
                                                        <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                                            {// Render the cell contents
                                                                cell.render('Cell')}
                                                        </Td>
                                                    )
                                                })}
                                        </Tr>
                                    )
                                })
                                    :
                                    <Tr>
                                        <Td colSpan={7} textAlign="center">
                                            No demandes
                                        </Td>
                                    </Tr>
                        }
                    </Tbody>

                </Table>
            </TableContainer>

            <HStack my={4} align="center">
                <HStack>
                    <IconButton icon={<MdFirstPage />} onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    <IconButton icon={<MdNavigateBefore />} onClick={() => previousPage()} disabled={!canPreviousPage} />
                    <IconButton icon={<MdNavigateNext />} onClick={() => nextPage()} disabled={!canNextPage} />
                    <IconButton icon={<MdLastPage />} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
                    <span>
                        Page{' '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                    </span>
                </HStack>
                <Select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)) }} w={40}>
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </Select>
            </HStack>

            <DemandeModal isOpen={isOpen} onClose={onClose} demande={demande} />
        </>
    );
}

export default DemandesTable;