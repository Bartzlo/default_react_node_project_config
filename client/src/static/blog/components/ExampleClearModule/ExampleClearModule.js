import bindComponent from 'lib/bindComponent.js'
import Component from 'lib/Component.js'
import './ExampleClearModule.scss'

class ExampleClearModule extends Component {
  constructor (tempalte, data) {
    super(tempalte, data)
    console.log('ExampleClearModule init')
  }
}

bindComponent('example-clear-module', ExampleClearModule, require('./ExampleClearModule.pug'))
