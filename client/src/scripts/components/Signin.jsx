class Signin extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      pwd: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  handleError (resMessage) {
    if (resMessage.text === 'required field is not filled') {
      this.setState({ error: 'Required field is not filled' })
      return
    }

    if (resMessage.text === 'incorrect username or password') {
      this.setState({ error: 'Incorrect username or password' })
      return
    }
  }

  handleChange (event) {
    let target = event.target

    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({ error: '' })

    if (!this.state.name ||
    !this.state.pwd
    ) {
      this.handleError({text: 'required field is not filled'})
      return
    }

    let reqData = {
      username: this.state.name,
      password: this.state.pwd
    }

    fetch('/api/auth/signin', {
      method: 'post',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(reqData)
    })
      .then(res => res.text())
      .then(res => {
        console.log(res)
        if (res.type === 'error') this.handleError(res)
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <h2>Singnin form</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
          Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
              </label>
            </li>
            <li>
              <label>
          Password:
                <input type="text" value={this.state.pwd} onChange={this.handleChange} name="pwd" />
              </label>
            </li>
            <li>
              <label>
                Submit
                <input type="submit"/>
              </label>
            </li>
            {this.state.error
              ? <li>{this.state.error}</li>
              : null
            }
          </ul>

        </form>
      </div>
    )
  }
}

export default Signin
