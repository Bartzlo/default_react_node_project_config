import { Link } from 'react-router-dom'

class PrivatePage extends React.Component {
  constructor (props) {
    console.log('construct');
    super(props)
    this.state = {
      response: '',
      error: ''
    }
  }

  componentDidMount () {
    console.log('mount');
    fetch(this.props.url, {
      method: 'get',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({response: res})
      })
      .catch(err => {
        console.log(err)
        this.setState({error: err})
      })
  }

  render () {
    let elem = null
    let error = this.state.error
    let response = this.state.response

    if (error) {
      elem = (
        <div>
          <p>Error: {error.message}</p>
          <Link to="/">Home</Link>
        </div>
      )
    } else if (response.message === 'need authorization') {
      elem = (
        <div>
          <p>You need authorized to access this page</p>
          <Link to="/signin">Go to signin page</Link>
          <br/>
          <Link to="/">Home</Link>
        </div>
      )
    } else if (response.message === 'not enough rights') {
      elem = (
        <div>
          <p>Hello {response.arg.userName}!</p>
          <p>Access denied</p>
          <p>Details:</p>
          <p>You grou: {response.arg.userGroup}</p>
          <p>Access available for groups: {response.arg.groupList}</p>
          <Link to="/">Home</Link>
        </div>
      )
    } else if (response.type === 'error') {
      elem = (
        <div>
          <p>Еhe server sent an error: {response.message}</p>
          <Link to="/">Home</Link>
        </div>
      )
    } else if (response.type === 'ok') {
      elem = React.createElement(
        this.props.element,
        {response: this.state.response}
      )
    }

    return elem
  }
}

export default PrivatePage
