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
        console.log(res)
        // if (res.type === 'error') this.handleError(res)
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <a href="#" onClick={this.handleClick}>Signout</a>
    )
  }
}

export default Signout
