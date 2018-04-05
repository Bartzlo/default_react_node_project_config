import getComponentData from 'lib/getComponentData.js'

import './InnerModule.scss'
import template from './InnerModule.pug'

class InnerModule {
  constructor (data) {
    console.log('INNER module init')
    this.template = template
    this.htmlTmpl = template({data: data})
    this.createElement()
    console.log(this.element)
  }

  createElement () {
    let elem = document.createElement('div')
    elem.innerHTML = this.htmlTmpl
    elem = elem.firstElementChild
    this.element = elem
  }

  getElement () {
    return this.element
  }
}

document.querySelectorAll('.inner-module').forEach(container => {
  let innerModule = new InnerModule(getComponentData(container))
  container.appendChild(innerModule.getElement())
})
