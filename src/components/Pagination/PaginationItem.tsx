import { Button } from "@chakra-ui/react";
import { memo } from "react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItemComponent = ({ isCurrent = false, number, onPageChange }: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width={4}
        colorScheme="pink"
        disabled
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width={4}
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};

export const PaginationItem = memo(PaginationItemComponent);
