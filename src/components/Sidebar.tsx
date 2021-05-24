import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <Box as="aside" w={64} mr={8}>
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text
            fontSize="small"
            fontWeight="bold"
            color="gray.400"
            textTransform="uppercase"
          >
            Geral
          </Text>

          <Stack spacing={4} mt={8} align="stretch">
            <Link display="flex" align="center" color="pink.400" py={1}>
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" align="center" py={1}>
              <Icon as={RiContactsLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            fontSize="small"
            fontWeight="bold"
            color="gray.400"
            textTransform="uppercase"
          >
            Automação
          </Text>

          <Stack spacing={4} mt={8} align="stretch">
            <Link display="flex" align="center" color="pink.400" py={1}>
              <Icon as={RiInputMethodLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">Formulários</Text>
            </Link>

            <Link display="flex" align="center" py={1}>
              <Icon as={RiGitMergeLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
