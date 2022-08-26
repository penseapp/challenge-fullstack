import { Switch } from 'react-router-dom'
import { Route } from './Route'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Signup } from '../pages/Signup'
export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/dashboard' component={Dashboard} isPrivate />
    <Route path='/signup' component={Signup} />
  </Switch>
)
