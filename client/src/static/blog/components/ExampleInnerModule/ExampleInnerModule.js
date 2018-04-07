import './ExampleInnerModule.scss'

class ExampleInnerModule {
  constructor (elem) {
    this.element = elem
    this.id = elem.dataset.id

    let dataElem = elem.querySelector('.component-data')
    this.data = dataElem && JSON.parse(dataElem.innerHTML)
    dataElem && dataElem.remove()

    console.log('ExampleInnerModule init')
  }
}

document.querySelectorAll('.example-inner-module').forEach((elem) => {
  new ExampleInnerModule(elem)
})
