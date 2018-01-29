class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {error: '', request: ''}
  }

  componentDidMount () {
    fetch('/api/site/profile', {
      method: 'get',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      credentials: 'same-origin'
    })
      .then(res => res.text())
      .then(res => {
        console.log(res)
        this.setState({request: res.message})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <h2>Profile page</h2>
        <p>
          {this.state.request ? this.state.request : 'Loading...'}
        </p>
      </div>
    )
  }
}

export default Profile
