import { Grid, Heading, Image, Text } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'

export const LoginInfo = () => (
  <Grid w={['100%', '100%', '50%', '50%']} paddingRight='100px'>
    <Image
      src={Logo}
      alt='pense-app logo'
      boxSize={['120px', '120px', '150px', '150px']}
    />
    <Heading mt='4' as='h1'>
      PenseApp Store
    </Heading>
    <Text maxW='350px'>
      The best prices and products <br />
      <b>available on the market</b>
    </Text>
  </Grid>
)
