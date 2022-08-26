import { Redirect, Route as ReactRoute, RouteProps } from 'react-router-dom'
import { ComponentType } from 'react'
import { useAuth } from '../contexts/AuthContext'
interface Props extends RouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { accessToken } = useAuth()

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/' : '/dashboard'} />
        )
      }
    />
  )
}
