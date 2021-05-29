import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Chart } from "../components/Chart";
import Header from "../components/Header/Index"
import Can from "../components/Permissions/Can";
import Sidebar from "../components/Sidebar/Index";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const chartData = [
  {
    id: 1,
    title: 'Inscritos da semana',
    permissions: ['metrics.lista'],
    chart: [
      {
        name: 'series1',
        data: [31, 120, 10, 28, 61, 18, 109]
      }
    ]
  },
  {
    id: 2,
    title: 'Taxa de abertura',
    permissions: ['metrics.list'],
    chart: [
      {
        name: 'series2',
        data: [109, 18, 61, 28, 10, 120, 31]
      }
    ]
  }
];

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my={6} mx="auto" px={6}>
        <Sidebar />

        <SimpleGrid flex={1} gap={4} minChildWidth="320px" align="flex-start">
          {chartData.map(chart => (
            <Can permissions={chart.permissions}>
              <Box
                p={[6, 8]}
                bg="gray.800"
                borderRadius={8}
                pb={4}
              >
                <Text fontSize="lg" mb={4}>{chart.title}</Text>
                <Chart data={chart.chart} />
              </Box>
            </Can>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
});
