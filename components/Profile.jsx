import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Link from 'next/link';
  export default function Profile({avatar,bio,name,username,}) {
    return (
      <Center >
        <Box
          maxW={'320px'}
        //   w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
        //   width='50%'
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              avatar
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @{username}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
             {bio}
          </Text>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Link href={'https://drive.google.com/file/d/1LQ5vTtSQWA6OzbTkP_3b5WPkEBEaabBm/view?usp=sharing'}><Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Resume
            </Button></Link>
           <Link href={'https://github.com/SumitPokhriyal5'}> <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button></Link> 
          </Stack>
        </Box>
      </Center>
    );
  }