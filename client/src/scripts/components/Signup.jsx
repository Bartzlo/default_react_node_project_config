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
  }

  handleChange (event) {
    let target = event.target

    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    // if (!this.state.name ||
    // !this.state.email ||
    // !this.state.pwd ||
    // !this.state.pwdConf
    // ) {
    //   this.setState({ error: 'Every field must be filled' })
    //   return
    // }

    // if (this.state.pwd !== this.state.pwdConf) {
    //   this.setState({ error: 'Passwords dos not match' })
    //   return
    // }

    this.setState({ error: '' })

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
        if (res.type === 'error') this.setState({ error: res.message })
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
