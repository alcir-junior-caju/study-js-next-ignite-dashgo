import { Avatar as AvatarChakra, Box, Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import { useAuth } from "../../context/AuthContext";

interface ProfileProps {
  showProfileData?: boolean;
}

interface AvatarProps {
  size: string;
  name: string;
  background: string;
  src: string;
};

const Avatar = memo(({ size, name, background, src }: AvatarProps) => {
  return (
    <AvatarChakra
      size={size}
      name={name}
      background={background}
      src={src}
    />
  );
});

const ProfileComponent = ({ showProfileData = true }: ProfileProps) => {
  const { user } = useAuth();

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Alcir Junior</Text>
          <Text color="gray.300" fontSize="small">{user?.email}</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alcir Junior"
        background="pink.500"
        src="https://github.com/alcir-junior-caju.png"
      />
    </Flex>
  );
};

export const Profile = memo(ProfileComponent);
