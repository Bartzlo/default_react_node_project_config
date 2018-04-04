import './innerModule.scss'

class innerModule {
  constructor (domElem) {
    this.elem = domElem
    this.data = JSON.parse(domElem.querySelector('.component-data').innerHTML)
    console.log('INNER module data: ')
    console.log(this.data)
  }
}

document.querySelectorAll('.inner-module').forEach(elem => {
  new innerModule(elem)
})
