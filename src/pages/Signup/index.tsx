import { Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { ModalError } from '../../components/Modal/ModalError'
import { ModalSuccess } from '../../components/Modal/ModalSuccess'
import { api } from '../../services/api'
import { GoBackButton } from './GoBackButton'
import { SignupForm } from './SignupForm'
import { SignupInfo } from './SignupInfo'

const signUpSchema = yup.object().shape({
  name: yup.string().required('Name required'),
  email: yup.string().required('Email required').email('Invalid email'),
  password: yup.string().required('Required password'),
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'The passwords do not match'),
})

interface SignupData {
  email: string
  password: string
  name: string
  confirm_password: string
}

export const Signup = () => {
  const [loading, setLoading] = useState(false)

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
        buttonMessage='Go to login now'
        message='Successfully registered, <b>log into your account</b>'
        onClick={() => history.push('/')}
        secondaryText='After logging in you can add <b>products</b> in your store'
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError
        error='An error has occurred, please try again'
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        secondaryText=''
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
