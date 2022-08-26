import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea as ChakraTextarea,
    TextareaProps as ChakraTextareaProps,
    InputLeftElement,
    InputGroup,
  } from '@chakra-ui/react'
  
  import {
    useState,
    useEffect,
    useCallback,
    useRef,
    ForwardRefRenderFunction,
    forwardRef,
  } from 'react'
  import { FieldError } from 'react-hook-form'
  import { IconType } from 'react-icons/lib'
  
  interface TextareaProps extends ChakraTextareaProps {
    name: string
    label?: string
    error?: FieldError | null
    icon?: IconType
  }
  
  type txtAreaVariantOptions = {
    [key: string]: string
  }
  
  const inputVariation: txtAreaVariantOptions = {
    error: 'red.500',
    default: 'gray.200',
    focus: 'purple.800',
    filled: 'green.500',
  }
  
  export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ name, label, error = null, icon: Icon, ...rest }, ref) => {
      const [variation, setVariation] = useState('default')
      const [value, setValue] = useState('')
  
      useEffect(() => {
        if (error) {
          return setVariation('error')
        }
      }, [error])
  
      const handleInputFocus = useCallback(() => {
        if (!error) {
          setVariation('focus')
        }
      }, [error])
  
      const handleInputBlur = useCallback(() => {
        if (value.length > 1 && !error) {
          return setVariation('filled')
        }
      }, [error, value])
  
      return (
        <FormControl isInvalid={!!error}>
          {!!label && <FormLabel color='gray.400'>{label}</FormLabel>}
          <InputGroup flexDirection='column'>
            {Icon && (
              <InputLeftElement color={inputVariation[variation]} mt='2.5'>
                <Icon />
              </InputLeftElement>
            )}
            <ChakraTextarea
              name={name}
              bg='gray.50'
              onChangeCapture={(e) => setValue(e.currentTarget.value)}
              color={inputVariation[variation]}
              borderColor={inputVariation[variation]}
              onFocus={handleInputFocus}
              onBlurCapture={handleInputBlur}
              variant='outline'
              _hover={{ bgColor: 'gray.100' }}
              _placeholder={{ color: 'gray.300' }}
              _focus={{ bg: 'gray.100' }}
              size='lg'
              h='60px'
              ref={ref}
              {...rest}
            />
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
          </InputGroup>
        </FormControl>
      )
    }
  )
  