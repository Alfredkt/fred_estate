// pages/search.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/property';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg'
import { withAuth } from '../lib/withAuth'; // Import withAuth

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
        {properties.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </Box>
  );
};

export const getServerSideProps = withAuth(async (context, session) => {
  const purpose = context.query.purpose || 'for-rent';
  const rentFrequency = context.query.rentFrequency || 'yearly';
  const minPrice = context.query.minPrice || '0';
  const maxPrice = context.query.maxPrice || '1000000';
  const roomsMin = context.query.roomsMin || '0';
  const bathsMin = context.query.bathsMin || '0';
  const sort = context.query.sort || 'price-desc';
  const areaMax = context.query.areaMax || '35000';
  const locationExternalIDs = context.query.locationExternalIDs || '5002';
  const categoryExternalID = context.query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
});

export default Search;
