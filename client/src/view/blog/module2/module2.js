import createElems from 'lib/createElems'

class Module2 {
  constructor (domElem) {
    if (DEV) console.log('Create new Module2')
    this.domElem = domElem
  }
}

let elems = createElems(Module2)
export {elems}
