import { Box, Button, HStack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

const dataPagination = [
  { number: 1, isCurrent: true},
  { number: 2, isCurrent: false},
  { number: 3, isCurrent: false},
  { number: 4, isCurrent: false},
];

const Pagination = () => {
  return (
    <HStack spacing={6} mt={8} justify="space-between" align="center">
      <Box>
        <Text as="strong">0</Text> - <Text as="strong">10</Text> de <Text as="strong">100</Text>
      </Box>

      <HStack spacing={2}>
        {dataPagination.map(page => (
          <PaginationItem number={page.number} isCurrent={page.isCurrent} />
        ))}
      </HStack>
    </HStack>
  );
};

export default Pagination;
