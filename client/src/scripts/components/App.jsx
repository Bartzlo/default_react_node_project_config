import { Route, Switch } from 'react-router-dom'
import MainMenu from './MainMenu'
import UserMenu from './UserMenu'
import HomePage from './HomePage'
import PrivatePage from './PrivatePage'
import PublicPage from './PublicPage'
import Profile from './Profile'
import Signin from './Signin'
import Signup from './Signup'
import Page404 from './Page404'

const App = (props) => (
  <div>
    <h1>Site name</h1>
    <MainMenu />
    <UserMenu />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/private-page" component={PrivatePage} />
      <Route path="/public-page" component={PublicPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route component={Page404}/>
    </Switch>
  </div>
)

export default App
