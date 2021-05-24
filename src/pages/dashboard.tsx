import { Flex } from "@chakra-ui/layout";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my={6} mx="auto" px={6}>
        <Sidebar />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
