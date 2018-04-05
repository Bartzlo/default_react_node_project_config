import { Link } from 'react-router-dom' // eslint-disable-line

class Signout extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    fetch('/api/auth/signout', {
      method: 'post',
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        if (DEV) console.log(res)
        this.props.changeUser(false)
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Link to="/" onClick={this.handleClick}>Signout</Link>
    )
  }
}

export default Signout
