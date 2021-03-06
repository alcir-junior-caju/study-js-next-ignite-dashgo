import { Box, Stack, Text } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSectionComponent = ({ title, children}: NavSectionProps) => {
  return (
    <Box>
      <Text
        fontSize="small"
        fontWeight="bold"
        color="gray.400"
        textTransform="uppercase"
      >
        {title}
      </Text>

      <Stack spacing={4} mt={8} align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export const NavSection = memo(NavSectionComponent);
