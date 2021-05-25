import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import Header from "../components/Header/Index"
import Sidebar from "../components/Sidebar/Index";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    colors: [theme.colors.pink[500], theme.colors.pink[900]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  stroke: {
    colors: [theme.colors.pink[500]],
  }
};

const series1 = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

const series2 = [
  { name: 'series2', data: [109, 18, 61, 28, 10, 120, 31] }
];

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my={6} mx="auto" px={6}>
        <Sidebar />

        <SimpleGrid flex={1} gap={4} minChildWidth="320px" align="flex-start">
          <Box
            p={8}
            bg="gray.800"
            borderRadius={8}
            pb={4}
          >
            <Text fontSize="lg" mb={4}>Inscritos da semana</Text>
            <Chart options={options} series={series1} type="area" height={160} />
          </Box>
          <Box
            p={8}
            bg="gray.800"
            borderRadius={8}
            pb={4}
          >
            <Text fontSize="lg" mb={4}>Taxa de abertura</Text>
            <Chart options={options} series={series2} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
