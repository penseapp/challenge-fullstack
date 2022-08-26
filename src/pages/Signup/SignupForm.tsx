import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import { Input } from '../../components/Form/Input'

interface SignupData {
  name: string
  email: string
  password: string
  confirm_password: string
}

interface SignupPropsForm {
  handleSignup: () => void
  errors: DeepMap<FieldValues, FieldError>
  register: UseFormRegister<SignupData>
  loading: boolean
}

export const SignupForm = ({
  handleSignup,
  errors,
  register,
  loading,
}: SignupPropsForm) => (
  <Grid
    as='form'
    onSubmit={handleSignup}
    mt={['4', '4', '0']}
    w={['100%', '100%', '40%', '40%']}
    padding='40px 25px'
    border='3px solid'
    borderColor='gray.100'
    bg='white'
    color='gray.900'
  >
    <Heading size='lg'>Crie sua conta</Heading>
    <VStack mt='6' spacing='5'>
      <Input
        placeholder='Digite seu nome'
        icon={FaUser}
        label='Name'
        error={errors?.name!}
        {...register('name')}
      />
      <Box w='100%'>
        <Input
          placeholder='Digite seu login'
          icon={FaEnvelope}
          label='Login'
          type='email'
          error={errors?.email!}
          {...register('email')}
        />
        {!errors.email && (
          <Text ml='1' mt='1' color='gray.300'>
            Exemplo: nome@email.com
          </Text>
        )}
      </Box>
      <Input
        placeholder='Digite sua senha'
        icon={FaLock}
        type='password'
        error={errors?.password}
        {...register('password')}
      />
      <Input
        placeholder='Confirme sua senha'
        icon={FaLock}
        type='password'
        error={errors?.confirm_password}
        {...register('confirm_password')}
      />
    </VStack>
    <Button
      mt='8'
      isLoading={loading}
      bg='purple.800'
      w='100%'
      color='white'
      h='60px'
      borderRadius='8px'
      _hover={{ background: 'purple.900' }}
      type='submit'
    >
      Finalizar cadastro
    </Button>
  </Grid>
)
