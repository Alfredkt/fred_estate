import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout, FcContacts } from 'react-icons/fc'; // Added FcContacts icon for Contact
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
      <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/' paddingLeft='2'>FRED ESTATE</Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
          <MenuList>
            <Link href='/' passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href='/search' passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href='/search?purpose=for-sale' passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href='/search?purpose=for-rent' passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
            <Link href='/contact' passHref>
              <MenuItem icon={<FcContacts />}>Contact Me</MenuItem>
            </Link>
            {session ? (
              <>
                <Link href='/accounts' passHref>
                  <MenuItem icon={<FcAbout />}>Account</MenuItem>
                </Link>
                <MenuItem icon={<FcAbout />} onClick={() => signOut()}>Sign Out</MenuItem>
              </>
            ) : (
              <Link href='/auth/signin' passHref>
                <MenuItem icon={<FcAbout />}>Sign In</MenuItem>
              </Link>
            )}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
