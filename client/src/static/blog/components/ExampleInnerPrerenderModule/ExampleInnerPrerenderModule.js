import './ExampleInnerPrerenderModule.scss'

class ExampleInnerPrerenderModule {
  constructor (elem) {
    this.element = elem

    let dataElem = elem.querySelector('.component-data')
    this.data = dataElem && JSON.parse(dataElem.innerHTML)
    dataElem && dataElem.remove()

    console.log('ExampleInnerPrerenderModule init')
  }
}

document.querySelectorAll('.example-inner-prerender-module').forEach((elem) => {
  new ExampleInnerPrerenderModule(elem)
})
