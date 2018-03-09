import { Link } from 'react-router-dom' // eslint-disable-line
import Signout from './Signout' // eslint-disable-line

class UserMenu extends React.Component {
  render () {
    let elem = null
    if (this.props.userName) {
      elem = (
        <div className="user-menu">
          <h4>User menu</h4>
          <p>User: {this.props.userName}</p>
          <Signout changeUser={this.props.changeUser} />
        </div>
      )
    } else {
      elem = (
        <div className="user-menu">
          <h3>User menu</h3>
          <Link to="/signin">Signin</Link>
          <p>or</p>
          <Link to="/signup">Signup</Link>
        </div>
      )
    }

    return elem
  }
}

export default UserMenu
