import crateElems from '../crateElems'

class Module1 {
  constructor (domElem) {
    console.log('create new Module1')
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

let elems = crateElems(Module1)
export {elems}
