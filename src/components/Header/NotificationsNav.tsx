import { HStack, Icon } from "@chakra-ui/react";
import { memo } from "react";
import { RiLogoutCircleLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";

const NotificationsNavComponent = () => {
  const { signOut } = useAuth();

  return (
    <HStack
      spacing={[6, 8]}
      mx={[6, 8]}
      pr={[6, 8]}
      py={1}
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize={20} />
      <Icon as={RiUserAddLine} fontSize={20} />
      <Icon as={RiLogoutCircleLine} fontSize={20} onClick={() => signOut()} _hover={{ cursor: 'pointer' }} />
    </HStack>
  );
};

export const NotificationsNav = memo(NotificationsNavComponent);
