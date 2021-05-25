import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchBox = () => {
  return (
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
  );
};

export default SearchBox;
