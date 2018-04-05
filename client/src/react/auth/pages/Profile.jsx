import elemReqData from 'lib/elemReqData'
import elemHandleError from 'lib/elemHandleError'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      response: ''
    }
  }

  componentDidMount () {
    elemReqData('/api/site/profile')
      .then(res => this.setState({response: res}))
      .catch(err => this.setState({error: err}))
  }

  render () {
    let response = this.state.response
    let error = this.state.error

    let elem = !response && !error ? null
      : elemHandleError(response, error) || (
        <div>
          <h2>Profile page</h2>
          <p>Welcome, {response.arg.userName}</p>
          <hr/>
          <h4>Account info</h4>
          <p>Name: {response.arg.userName}</p>
          <p>E-mail: {response.arg.email}</p>
          <p>Group: {response.arg.userGroup}</p>
        </div>
      )

    return elem
  }
}

export default Profile
