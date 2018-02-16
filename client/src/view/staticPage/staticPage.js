import crateElems from '../crateElems'
import wait from '../waitScript'

class StaticPage {
  constructor (domElem) {
    console.log('create new StaticPage')
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

let elems = crateElems(StaticPage)
export {elems}
