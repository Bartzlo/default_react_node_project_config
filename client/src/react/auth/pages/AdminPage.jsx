import elemReqData from 'lib/elemReqData'
import elemHandleError from 'lib/elemHandleError'

class AdminPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      response: ''
    }
  }

  componentDidMount () {
    elemReqData('/api/site/admin-page')
      .then(res => this.setState({response: res}))
      .catch(err => this.setState({error: err}))
  }

  render () {
    let response = this.state.response
    let error = this.state.error

    let elem = !response && !error ? null
      : elemHandleError(response, error) || (
        <div>
          <h2>Admin page</h2>
          <p>Welcome!</p>
          <p>Dynamic data: {response.arg.text}</p>
        </div>
      )

    return elem
  }
}

export default AdminPage
