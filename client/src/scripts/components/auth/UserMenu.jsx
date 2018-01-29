import { Link } from 'react-router-dom'
import Signout from './Signout'

class UserMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  render () {
    return (
      <div>
        <h3>User menu</h3>
        <Link to="/signup">Signup </Link>
        <Link to="/signin">Signin </Link>
        <Signout />
      </div>
    )
  }
}

export default UserMenu
