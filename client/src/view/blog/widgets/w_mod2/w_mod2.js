import createElems from 'lib/createElems'

class WMode2 {
  constructor (domElem) {
    if (DEV) console.log('Create new WMode2')
    this.domElem = domElem
  }
}

let elems = createElems(WMode2)
export {elems}
