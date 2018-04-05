function getComponentData (elem) {
  return JSON.parse(elem.querySelector('.component-data').innerHTML)
}

export default getComponentData
