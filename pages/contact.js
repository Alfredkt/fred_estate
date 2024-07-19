import { Box, Heading, Text, Center, VStack, Image } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Center h="100vh" bg="gray.100">
      <Box
        p={8}
        maxW="md"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        textAlign="center"
        bg="white"
      >
        <Heading as="h1" size="xl" mb={6}>
          Contact Me
        </Heading>
        <Image
          src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_1280.jpg" 
          alt="Your Photo"
          borderRadius="full"
          mb={6}
          borderWidth={1}
          boxShadow="sm"
          objectFit="cover"
        />
        <VStack spacing={4}>
          <Text fontSize="lg" color="gray.700">
            Hello! I'm Alfred Kwesi Tawiah, the founder of Fred Estate. You can reach out to me through the following contact details.
          </Text>
          <Text fontSize="lg" color="gray.700">
            <strong>Email:</strong> alfredtawia2244@gmail.com
          </Text>
          <Text fontSize="lg" color="gray.700">
            <strong>Phone:</strong> (053) 088-8695
          </Text>
          <Text fontSize="lg" color="gray.700">
            <strong>Address:</strong> AK-438-1825, Atonsu
          </Text>
        </VStack>
      </Box>
    </Center>
  );
}
