import { IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, Select, HStack, Spinner } from "@chakra-ui/react";
import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import moment from "moment";

const StudentsTable = ({ data, loading }) => {

    const tableBg = useColorModeValue('whiteAlpha.800', 'blackAlpha.300')
    const tableRowHover = useColorModeValue('gray.100', 'blackAlpha.300')

    const columns = useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'firstName', Cell: ({ row }) => row.original ? row.original.firstName + ' ' + row.original.lastName : row.groupByVal },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Phone', accessor: 'phone' },
            { Header: 'Filiere', accessor: 'filiere' },
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
                                        <Tr _hover={{ bg: tableRowHover }} {...row.getRowProps()}>
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
                                            No students
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

        </>
    );
}

export default StudentsTable;