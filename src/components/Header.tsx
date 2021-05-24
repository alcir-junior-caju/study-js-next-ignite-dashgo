import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={20}
      mx="auto"
      px={6}
      mt={4}
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w={64}>
        dashGo
        <Text as="span" ml={1} color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex={1}
        py={4}
        px={8}
        ml={6}
        maxW={400}
        alignSelf="center"
        position="relative"
        bg="gray.800"
        color="gray.200"
        borderRadius="full"
      >
        <Input
          variant="unstyled"
          color="gray.50"
          px={4}
          mr={4}
          placeholder="Busca na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing={8}
          mx={8}
          pr={8}
          py={1}
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>

        <Flex align="center">
          <Box mr={4} textAlign="right">
            <Text>Alcir Junior</Text>
            <Text color="gray.300" fontSize="small">junior@cajucomunica.com.br</Text>
          </Box>

          <Avatar
            size="md"
            name="Alcir Junior"
            background="pink.500"
            src="https://github.com/alcir-junior-caju.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
