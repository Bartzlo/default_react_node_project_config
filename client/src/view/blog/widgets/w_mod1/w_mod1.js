import createElems from 'lib/createElems'

class WMode1 {
  constructor (domElem) {
    if (DEV) console.log('Create new WMode1')
    this.domElem = domElem
  }
}

let elems = createElems(WMode1)
export {elems}
