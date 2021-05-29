import { Box, HStack, Text } from "@chakra-ui/react";
import { memo } from "react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return [... new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
};

const PaginationComponent = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <HStack spacing={6} mt={8} justify="space-between" align="center">
      <Box>
        <Text as="strong">{currentPage}</Text> - <Text as="strong">{lastPage}</Text> de <Text as="strong">{totalCountOfRegisters}</Text>
      </Box>

      <HStack spacing={2}>
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text as="span" color="gray.300" w={8} textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} number={page} key={page} />;
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} number={page} key={page} />;
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text as="span" color="gray.300" w={8} textAlign="center">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage}/>
          </>
        )}
      </HStack>
    </HStack>
  );
};

export const Pagination = memo(PaginationComponent);
