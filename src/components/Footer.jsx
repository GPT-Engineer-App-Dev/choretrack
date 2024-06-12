import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.200" w="100%">
      <Text>&copy; 2023 Todo App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;