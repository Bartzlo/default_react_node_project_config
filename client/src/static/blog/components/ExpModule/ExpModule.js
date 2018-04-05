import bindComponent from 'lib/bindComponent.js'
import Component from 'lib/Component.js'
import './ExpModule.scss'

class ExpModule extends Component {
  constructor (tempalte, data) {
    super(tempalte, data)
    console.log('ExpModule init')
  }
}

bindComponent('exp-module', ExpModule, require('./ExpModule.pug'))
