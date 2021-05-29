import { Text } from "@chakra-ui/react";
import { memo } from "react";

const LogoComponent = () => {
  return (
    <Text fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" w={64}>
      dashGo
      <Text as="span" ml={1} color="pink.500">.</Text>
    </Text>
  );
};

export const Logo = memo(LogoComponent);
