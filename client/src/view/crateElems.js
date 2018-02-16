let thisSrc
if (document.currentScript) {
  thisSrc = document.currentScript.dataset.src
} else {
  let scripts = document.getElementsByTagName('script')
  thisSrc = scripts[scripts.length - 1].dataset.src
}

function createObjs (ClassElem) {
  let elems = []
  dynamicElems.forEach(element => { // eslint-disable-line
    if (element.dataset.scriptSrc === thisSrc) {
      elems.push(new ClassElem(element))
    }
  })
  return elems
}

export default createObjs
