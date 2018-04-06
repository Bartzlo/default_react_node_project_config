import bindComponent from 'lib/bindComponent.js'
import Component from 'lib/Component.js'
import './ExampleClearInnerModule.scss'

class ExampleClearInnerModule extends Component {
  constructor (tempalte, data) {
    super(tempalte, data)
    console.log('ExampleClearInnerModule init')
  }
}

bindComponent('example-clear-inner-module', ExampleClearInnerModule, require('./ExampleClearInnerModule.pug'))
