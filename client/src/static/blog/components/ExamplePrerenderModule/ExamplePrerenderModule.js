import './ExamplePrerenderModule.scss'

class ExamplePrerenderModule {
  constructor (elem) {
    this.element = elem

    let dataElem = elem.querySelector('.component-data')
    this.data = dataElem && JSON.parse(dataElem.innerHTML)
    dataElem && dataElem.remove()

    console.log('ExamplePrerenderModule init')
  }
}

document.querySelectorAll('.example-prerender-module').forEach((elem) => {
  new ExamplePrerenderModule(elem)
})
