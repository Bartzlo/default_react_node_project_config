import './templModule.scss'
import template from './template.pug'

class templModule {
  constructor (domElem) {
    this.elem = domElem
    this.data = JSON.parse(domElem.querySelector('.component-data').innerHTML)
    
    this.htmlTmpl = template({text: this.data.text, data: {text: '!!! asd !!!'}})
    let templElem = document.createElement('div')
    templElem.innerHTML = this.htmlTmpl
    templElem = templElem.firstChild

    this.elem.appendChild(templElem)
  }
}

document.querySelectorAll('.templ-module').forEach(elem => {
  new templModule(elem)
})
