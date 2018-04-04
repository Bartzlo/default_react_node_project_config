import './expModule.scss'

class expModule {
  constructor (domElem) {
    this.elem = domElem
    this.data = JSON.parse(domElem.querySelector('.component-data').innerHTML)
    console.log('EXP module data: ')
    console.log(this.data);
  }
}

document.querySelectorAll('.exp-module').forEach(elem => {
  new expModule(elem)
})
