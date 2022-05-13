import { Box, Circle, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Emoji from './emoji';

export default function AuthorProfile() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '4', md: '8' }}>
      <Circle size="80px" overflow="hidden">
        <Image
          alt="Ifeoluwa Afuwape"
          src="/static/images/ife-head-shot.jpg"
          width="80px"
          height="80px"
        />
      </Circle>
      <Box>
        <Heading size="md">Written by Ifeoluwa Afuwape (Hipheckt)</Heading>
        <Text mt="4" color="gray.400" lineHeight="taller">
          Hipheckt is a Mobile Engineer{' '} <Emoji label="Mobile developer">👨🏽‍💻</Emoji>. He is passionate about technology especially mobile solutions, He has vast experience building different mobile solutions for fintechs, telcos, logistics and health/fitness.
        </Text>
      </Box>
    </Flex>
  );
}
