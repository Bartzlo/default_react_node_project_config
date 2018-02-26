import createElems from 'lib/createElems'

class Module1 {
  constructor (domElem) {
    if (DEV) console.log('Create new Module1')
    this.domElem = domElem
    this.text = this.domElem.firstElementChild.innerHTML
    this.setColor()
  }

  setColor () {
    this.domElem.style.color = this.text
  }

  setText (text) {
    this.text = text
    this.domElem.innerHTML = text
    this.setColor()
  }
}

let elems = createElems(Module1)
export {elems}
