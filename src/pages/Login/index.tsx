import { Flex } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { LoginForm } from './LoginForm'
import { LoginInfo } from './LoginInfo'
import { useHistory } from 'react-router-dom'

const signInSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória'),
})

interface SignInData {
  email: string
  password: string
}

export const Login = () => {
  const [loading, setLoading] = useState(false)

  const { signIn, accessToken } = useAuth()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({ resolver: yupResolver(signInSchema) })

  const handleSignIn: SubmitHandler<SignInData> = (data: SignInData) => {
    setLoading(true)
    signIn(data)
      .then((_) => {
        setLoading(false)
      })
      .catch((_) => setLoading(false))
  }

  return (
    <Flex
      padding={['10px 15px', '10px 15px', '0px', '0px']}
      alignItems='center'
      justifyContent='center'
      h={['auto', 'auto', '100vh', '100vh']}
      bgGradient={[
        'linear(to-b, purple.800 65%, white 35%)',
        'linear(to-b, purple.800 65%, white 35%)',
        'linear(to-r, purple.800 65%, white 35%)',
        'linear(to-r, purple.800 65%, white 35%)',
      ]}
      color='white'
    >
      <Flex
        w={['100%', '100%', '90%', '65%']}
        justifyContent='center'
        flexDirection={['column', 'column', 'row', 'row']}
        alignItems='center'
      >
        <LoginInfo />
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  )
}
