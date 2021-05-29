import { Icon, Link as ChacraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType, memo } from "react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

const NavLinkComponent = ({ icon, href, children, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChacraLink display="flex" align="center" py={1} {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">{children}</Text>
      </ChacraLink>
    </ActiveLink>
  );
};

export const NavLink = memo(NavLinkComponent);
