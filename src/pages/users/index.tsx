import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useCallback, useState } from "react";
import { RiAddLine, RiPencilLine, RiRefreshLine } from "react-icons/ri";
import Header from "../../components/Header/Index";
import Pagination from "../../components/Pagination/Index";
import Sidebar from "../../components/Sidebar/Index";
import useUsers from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { withSSRAuth } from "../../utils/withSSRAuth";

const UsersList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error, refetch } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  const handlePrefetchUser = useCallback(async (userId: string) => {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await fetch(`https://localhost:3000/api/users/${userId}`);
      const data = await response.json();

      return data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  }, [queryClient]);

  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml={4} />}
            </Heading>

            <Box>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiRefreshLine} fontSize={20} />}
                mr={2}
                onClick={() => refetch()}
              >
                Atualizar
              </Button>

              <NextLink href="/users/create" passHref>

                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                >
                  Novo usuário
                </Button>
              </NextLink>
            </Box>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados!</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={[4, 4, 6]} color="gray.300" w={8}>
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && (
                      <>
                        <Th>Data de cadastro</Th>
                        <Th w={8}>Ações</Th>
                      </>
                    )}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={[4, 4, 6]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && (
                        <>
                          <Td>{user.createdAt}</Td>
                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                            >
                              Editar
                            </Button>
                          </Td>
                        </>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default UsersList;

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
});
