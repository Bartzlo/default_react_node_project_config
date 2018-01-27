class Signup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      pwd: '',
      pwdConf: '',
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

    if (resMessage.text === 'passwords do not match') {
      this.setState({ error: 'Passwords do not match' })
      return
    }

    if (resMessage.text === 'duplicate email') {
      this.setState({ error: `Email: ${resMessage.arg} alrady exist` })
      return
    }

    if (resMessage.text === 'duplicate username') {
      this.setState({ error: `User: ${resMessage.arg} alrady exist` })
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
    !this.state.email ||
    !this.state.pwd ||
    !this.state.pwdConf
    ) {
      this.handleError({text: 'required field is not filled'})
      return
    }

    if (this.state.pwd !== this.state.pwdConf) {
      this.handleError({text: 'passwords do not match'})
      return
    }

    let regData = {
      username: this.state.name,
      email: this.state.email,
      password: this.state.pwd,
      passwordConf: this.state.pwdConf
    }

    fetch('/api/auth/signup', {
      method: 'post',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(regData)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.type === 'error') this.handleError(res)
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <h2>Singnup form</h2>
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
          E-mail:
                <input type="email" value={this.state.email} onChange={this.handleChange} name="email" id=""/>
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
          Confirm password:
                <input type="text" value={this.state.pwdConf} onChange={this.handleChange} name="pwdConf" />
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

export default Signup
