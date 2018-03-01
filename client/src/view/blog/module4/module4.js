import createElems from 'lib/createElems'

class Module4 {
  constructor (domElem) {
    if (DEV) console.log('Create new Module4')
    this.domElem = domElem
  }
}

let elems = createElems(Module4)
export {elems}
