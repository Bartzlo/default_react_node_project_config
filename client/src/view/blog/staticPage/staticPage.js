import createElems from 'lib/createElems'
import wait from 'lib/waitScript'

class StaticPage {
  constructor (domElem) {
    if (DEV) console.log('Create new StaticPage')
    this.domElem = domElem
    this.html = domElem.innerHTML
    this.editModule()
  }

  editModule () {
    wait('module1') // eslint-disable-line
      .then(res => {
        res.elems[1].setText('orange') // eslint-disable-line
      })
  }
}

// console.log($('p'))
let elems = createElems(StaticPage)
export {elems}
