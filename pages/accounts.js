import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Text, Button, Flex, Avatar, Divider, VStack, HStack } from '@chakra-ui/react';
import { EmailIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { signOut } from 'next-auth/react';

const Account = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin');
    }
  }, [session, router]);

  if (!session) {
    return <p>Loading...</p>; // Show a loading message or spinner while redirecting
  }

  return (
    <Box maxW="800px" mx="auto" p={5} boxShadow="lg" borderRadius="md" bg="white">
      <Flex justifyContent="center" mb={5}>
        <Avatar name={session.user.name} src={session.user.image} size="xl" />
      </Flex>
      <Heading as="h1" textAlign="center" mb={5}>Account Details</Heading>
      <Divider mb={5} />
      <VStack spacing={4} align="start">
        <HStack>
          <InfoOutlineIcon />
          <Text fontSize="lg"><strong>Name:</strong> {session.user.name}</Text>
        </HStack>
        <HStack>
          <EmailIcon />
          <Text fontSize="lg"><strong>Email:</strong> {session.user.email}</Text>
        </HStack>
      </VStack>
      <Divider my={5} />
      <VStack spacing={4}>
        <Button colorScheme="red" onClick={() => signOut()} w="full">
          Sign Out
        </Button>
      </VStack>
    </Box>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Account;
