import bindComponent from 'lib/bindComponent.js'
import Component from 'lib/Component.js'
import './InnerModule.scss'

class InnerModule extends Component {
  constructor (tempalte, data) {
    super(tempalte, data)
    console.log('InnerModule init')
  }
}

bindComponent('inner-module', InnerModule, require('./InnerModule.pug'))
