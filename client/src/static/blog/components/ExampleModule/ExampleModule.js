import './ExampleModule.scss'
import '../../components/ExampleInnerModule/ExampleInnerModule.js'

class ExampleModule {
  constructor (elem) {
    this.element = elem
    this.id = elem.dataset.id
    this.counter = 0

    let dataElem = elem.querySelector('.component-data')
    this.data = dataElem && JSON.parse(dataElem.innerHTML)
    dataElem && dataElem.remove()

    console.log('ExampleModule init')
  }
}

document.querySelectorAll('.example-module').forEach((elem) => {
  new ExampleModule(elem)
})
