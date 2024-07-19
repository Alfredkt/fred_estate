'use client';
import { Box, Button, Center, Heading, VStack, Image } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';


export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

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
        <Heading as="h1" size="2xl" mb={6}>
          WELCOME TO FRED ESTATE
        </Heading>
        <Image
  src="https://assets-global.website-files.com/5e99608fae81cfc99b44bcc1/5ecba14aaa2056f79bfd0c57_best-listing-photos-bmb-dezines-luxury-614x409.jpeg"
  alt="Estate Image"
  h="200px"
  w="100%"
  mb={6}
  borderWidth={1}
  borderRadius="lg"
  boxShadow="sm"
  objectFit="cover"
/>

        <Heading as="h2" size="lg" mb={6}>
          Please Sign In
        </Heading>
        <VStack spacing={4}>
          <Button
            leftIcon={<FcGoogle />}
            colorScheme="teal"
            variant="outline"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            Sign in with Google
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
