// props: callback(err, res), request: {url: string, opt: {}}

class LinkAPI extends React.Component {
  constructor (props) {
    super(props)

    this.url = this.props.request.link
    this.opt = this.props.request.opt
    this.callback = this.props.callback

    this.state = {error: '', response: ''}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    fetch(this.url, this.opt)
      .then(res => res.json())
      .then(res => this.callback(null, res))
      .catch(err => this.callback(err))
  }

  render () {
    return (
      <div onClick={this.handleClick}>{this.props.children}</div>
    )
  }
}

export default LinkAPI
