import { Switch } from 'react-router-dom'
import { Route } from './Route'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Signup } from '../pages/Signup'
import { PageNotFound } from '../pages/PageNotFound'
import { useAuth } from '../contexts/AuthContext'
import { Wishlist } from '../pages/Wishlist'

export const Routes = () => {
  const { accessToken } = useAuth()

  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/dashboard' component={Dashboard} isPrivate />
      <Route path='/wishlist' component={Wishlist} isPrivate />
      <Route path='/signup' component={Signup} />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  )
}
