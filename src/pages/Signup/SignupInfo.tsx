import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaForward } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import { theme } from '../../styles/theme'

export const SignupInfo = () => (
  <Grid
    w={['100%', '100%', '50%', '50%']}
    paddingLeft={['10px', '10px', '150px']}
  >
    <Image
      src={Logo}
      alt='pense-app logo'
      boxSize={['120px', '120px', '150px', '150px']}
    />
    <VStack spacing='14' mt={['10px', '0']}>
      <Flex w='100%'>
        <Center borderRadius='5px' bg='white' w='50px' h='40px'>
          <FaForward color={theme.colors.purple['800']} size={25} />
        </Center>
        <Box ml='4'>
          <Heading size='lg'>Agilidade</Heading>
          <Text>
            Agilize seus projetos com rapidez <br /> e muita performance
          </Text>
        </Box>
      </Flex>
      <Flex w='100%'>
        <Center borderRadius='5px' bg='white' w='50px' h='40px'>
          <FaForward color={theme.colors.purple['800']} size={25} />
        </Center>
        <Box ml='4'>
          <Heading size='lg'>Agilidade</Heading>
          <Text>
            Agilize seus projetos com rapidez <br /> e muita performance
          </Text>
        </Box>
      </Flex>
    </VStack>
  </Grid>
)
