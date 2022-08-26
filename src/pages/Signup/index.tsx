import { Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import { GoBackButton } from './GoBackButton'
import { SignupForm } from './SignupForm'
import { SignupInfo } from './SignupInfo'
import { api } from '../../services/api'
import { ModalSuccess } from '../../components/Modal/ModalSuccess'
import { ModalError } from '../../components/Modal/ModalError'
import { useHistory } from 'react-router-dom'

const signUpSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha inválida'),
  confirm_password: yup
    .string()
    .required('Confrimação de senha obrigatoria')
    .oneOf([yup.ref('password')], 'Senhas diferentes'),
})

interface SignupData {
  email: string
  password: string
  name: string
  confirm_password: string
}

export const Signup = () => {
  const [loading, setLoading] = useState(false)

  const { signIn, accessToken } = useAuth()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignupData>({ resolver: yupResolver(signUpSchema) })

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure()

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure()

  const handleSignup: SubmitHandler<SignupData> = ({
    name,
    email,
    password,
  }: SignupData) => {
    api
      .post('/register', { name, email, password })
      .then((_) => {
        setLoading(false)
        onModalSuccessOpen()
      })
      .catch((_) => {
        setLoading(false)
        onModalErrorOpen()
      })
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  const history = useHistory()

  return (
    <>
      <ModalSuccess
        buttonMessage='Ir para o login agora'
        message='Seu cadastro deu super certo, <b>vamos la</b>'
        onClick={() => history.push('/')}
        secondaryText='Voce ja pode comecar criando <b>suas lista</b> de tarefas agora mesmo...'
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError
        error='Ocorreu um erro, tente novamente por favor.'
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        secondaryText='Voce ja pode comecar criando <b>suas lista</b> de tarefas agora mesmo...'
      />
      <Flex
        padding={['10px 15px', '10px 15px', '0px', '0px']}
        alignItems='center'
        justifyContent='center'
        h={['auto', 'auto', '100vh', '100vh']}
        bgGradient={[
          'linear(to-b, purple.800 65%, white 35%)',
          'linear(to-b, purple.800 65%, white 35%)',
          'linear(to-l, purple.800 65%, white 35%)',
          'linear(to-l, purple.800 65%, white 35%)',
        ]}
        color='white'
      >
        <Flex
          w={['100%', '100%', '90%', '65%']}
          justifyContent='center'
          flexDirection={['column', 'column', 'row', 'row']}
        >
          {isWideVersion ? (
            <>
              {' '}
              <GoBackButton top='75' left='24' />
              <SignupForm
                errors={errors}
                handleSignup={handleSubmit(handleSignup)}
                loading={loading}
                register={register}
              />
              <SignupInfo />
            </>
          ) : (
            <>
              {' '}
              <GoBackButton top='10' left='75vw' />
              <SignupInfo />
              <SignupForm
                errors={errors}
                handleSignup={handleSubmit(handleSignup)}
                loading={loading}
                register={register}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  )
}
