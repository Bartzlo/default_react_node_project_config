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
        if (DEV) console.log('Change module 1[0] text')
        res.elems[0].setText('purple') // eslint-disable-line
      })
  }
}

let elems = createElems(StaticPage)
export {elems}
