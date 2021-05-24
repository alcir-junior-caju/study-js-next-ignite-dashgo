import { Box, Button, HStack, Text } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <HStack spacing={6} mt={8} justify="space-between" align="center">
      <Box>
        <Text as="strong">0</Text> - <Text as="strong">10</Text> de <Text as="strong">100</Text>
      </Box>

      <HStack spacing={2}>
        <Button
          size="sm"
          fontSize="xs"
          width={4}
          colorScheme="pink"
          disabled
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width={4}
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>
      </HStack>
    </HStack>
  );
};

export default Pagination;
