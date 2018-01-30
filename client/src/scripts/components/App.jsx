import { Route, Switch, Redirect } from 'react-router-dom'
import MainMenu from './MainMenu'
import UserMenu from './auth/UserMenu'
import HomePage from './HomePage'
import PrivatePage from './PrivatePage'
import AdminPage from './AdminPage'
import PublicPage from './PublicPage'
import Profile from './Profile'
import Signin from './auth/Signin'
import Signup from './auth/Signup'
import Page404 from './Page404'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {userName: ''}
    this.changeUser = this.changeUser.bind(this)
  }

  componentDidMount () {
    fetch('/api/auth/check', {
      method: 'get',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.changeUser(res.arg.username)
      })
      .catch(err => console.log(err))
  }

  changeUser (userName) {
    this.setState({userName: userName})
  }

  render () {
    let userName = this.state.userName
    return (
      <div className="wrapper">
        <div className="main-header">
          <h1>Site name</h1>
        </div>
        <MainMenu />
        <UserMenu changeUser={this.changeUser} userName={userName} />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/admin" component={AdminPage} />

            <Route path="/profile" component={Profile} />

            <Route path="/public-page" component={PublicPage} />

            <Route path="/signin" render={() => (
              !userName ? (
                <Signin channgeUser={this.changeUser} />
              ) : (
                <Redirect to="/"/>
              )
            )} />

            <Route path="/signup" render={() => (
              !userName ? (
                <Signup channgeUser={this.changeUser} />
              ) : (
                <Redirect to="/"/>
              )
            )} />

            <Route component={Page404}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
