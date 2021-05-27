import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
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

export default Profile;
