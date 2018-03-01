import createElems from 'lib/createElems'

class Module1 {
  constructor (domElem) {
    if (DEV) console.log('Create new Module1')
    this.domElem = domElem
    this.colorElem = this.domElem.querySelector('.color')
    this.text = this.colorElem.innerHTML
    this.setColor()
  }

  setColor () {
    this.colorElem.style.color = this.text
  }

  setText (text) {
    this.text = text
    this.colorElem.innerHTML = text
    this.setColor()
  }
}

let elems = createElems(Module1)
export {elems}
