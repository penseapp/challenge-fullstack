import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import NotFoundImg from '../../assets/404.svg'

export const PageNotFound = () => {
  return (
    <Flex
      padding={['10px 15px', '10px 15px', '0px', '0px']}
      alignItems='center'
      justifyContent='space-evenly'
      h={['auto', 'auto', '100vh', '100vh']}
      flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
    >
      <Box mt='4'>
        <Heading>Ooops!</Heading>
        <Text mt='4'>
          We couldn't find the page you're looking for <br />
          <b>let's try again.</b>
        </Text>
        <Button
          mt='4'
          bg='red.600'
          h='60px'
          color='white'
          w='100%'
          _hover={{ bg: 'red.700' }}
        >
          Back to home
        </Button>
      </Box>
      <Image src={NotFoundImg}></Image>
    </Flex>
  )
}
