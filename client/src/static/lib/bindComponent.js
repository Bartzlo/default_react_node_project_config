function bindComponent (className, ClassObject, template) {
  document.querySelectorAll('.' + className).forEach(container => {
    let data = JSON.parse(container.querySelector('.component-data').innerHTML)
    let expModule = new ClassObject(template, data)
    let element = expModule.getElement()
    element.className = className
    container.parentElement.insertBefore(element, container)
    container.remove()
  })
}

export default bindComponent
