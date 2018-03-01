import createElems from 'lib/createElems'

class Module3 {
  constructor (domElem) {
    if (DEV) console.log('Create new Module3')
    this.domElem = domElem
  }
}

let elems = createElems(Module3)
export {elems}
