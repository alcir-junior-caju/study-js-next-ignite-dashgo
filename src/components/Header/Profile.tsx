import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Alcir Junior</Text>
          <Text color="gray.300" fontSize="small">junior@cajucomunica.com.br</Text>
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
