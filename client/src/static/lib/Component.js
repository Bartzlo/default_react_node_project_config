class Component {
  constructor (tempalte, data) {
    this.template = tempalte
    this.htmlTmpl = tempalte({data: data})
    this.createElement()
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

export default Component
