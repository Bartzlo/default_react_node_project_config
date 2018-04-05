import getComponentData from 'lib/getComponentData.js'

import './ExpModule.scss'
import template from './ExpModule.pug'

class ExpModule {
  constructor (data) {
    console.log('EXP module init')
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

document.querySelectorAll('.exp-module').forEach(container => {
  let expModule = new ExpModule(getComponentData(container))
  container.appendChild(expModule.getElement())
})
