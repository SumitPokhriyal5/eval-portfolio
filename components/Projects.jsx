import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';
import {AiOutlineStar} from "react-icons/ai"
import {BiGitRepoForked} from "react-icons/bi"

export default function Projects({url,des,fork,star,language}) {
  return (
    <>
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{url}</Text>
    
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          {des}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Text display={'flex'} fontSize='25px' justifyContent={'center'} alignItems="center">
         < AiOutlineStar/>
         {star}
          </Text >
          <Text display={'flex'} fontSize='25px' justifyContent={'center'} alignItems="center">
            <BiGitRepoForked/>
            {fork}
          </Text>
          <Text display={'flex'} fontSize='25px' justifyContent={'center'} alignItems="center">{language}</Text>
        </Stack>
      </Stack>
    </Stack>
    </>
  );
}