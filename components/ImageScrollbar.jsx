// components/ImageScrollbar.js
import { Box, Image, Flex } from '@chakra-ui/react';
import { useState } from 'react';

const ImageScrollbar = ({ data }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (event) => {
    setScrollX(event.target.scrollLeft);
  };

  return (
    <Box overflowX="scroll" whiteSpace="nowrap" onScroll={handleScroll} p='4'>
      <Flex>
        {data.map((photo, index) => (
          <Image 
            key={index} 
            src={photo.url} 
            alt={`property-image-${index}`} 
            width="600px" 
            height="400px" 
            mr="4" 
            borderRadius="10px"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageScrollbar;
