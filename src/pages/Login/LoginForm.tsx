import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Input } from '../../components/Form/Input'

interface SignInData {
  email: string
  password: string
}

interface LoginPropsForm {
  handleSignIn: () => void
  errors: DeepMap<FieldValues, FieldError>
  register: UseFormRegister<SignInData>
  loading: boolean
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginPropsForm) => {
  const history = useHistory()

  return (
    <Grid
      as='form'
      onSubmit={handleSignIn}
      mt={['4', '4', '0']}
      w={['100%', '100%', '40%', '40%']}
      padding='30px 15px'
      border='3px solid'
      borderColor='gray.100'
      bg='white'
      color='gray.900'
    >
      <Heading size='lg'> Login with your account</Heading>
      <VStack mt='6' spacing='5'>
        <Box w='100%'>
          <Input
            placeholder='Type your email'
            icon={FaEnvelope}
            label='Login'
            type='email'
            error={errors?.email!}
            {...register('email')}
          />
          {!errors.email && (
            <Text ml='1' mt='1' color='gray.300'>
              Example: john@penseapp.com.br
            </Text>
          )}
        </Box>
        <Input
          placeholder='Type your password'
          icon={FaLock}
          type='password'
          error={errors?.password}
          {...register('password')}
        />
      </VStack>
      <VStack mt='4' spacing='5'>
        <Button
          isLoading={loading}
          bg='purple.800'
          w='100%'
          color='white'
          h='60px'
          borderRadius='8px'
          _hover={{ background: 'purple.900' }}
          type='submit'
        >
          Login
        </Button>
        <Text color='gray.400'>Don't have an account yet?</Text>
        <Button
          onClick={() => history.push('/signup')}
          bg='gray.100'
          w='100%'
          color='gray.300'
          h='60px'
          borderRadius='8px'
          _hover={{ background: 'gray.200' }}
        >
          Create your account
        </Button>
      </VStack>
    </Grid>
  )
}
