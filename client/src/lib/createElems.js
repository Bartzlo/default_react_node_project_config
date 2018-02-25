import dynamicElems from './loadScripts'

if (DEV) console.log('Execute createElems.js')

function getThisScriptSrc () {
  if (document.currentScript) {
    return document.currentScript.dataset.src
  } else {
    let scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1].dataset.src
  }
}

function createObjs (ClassElem) {
  let thisSrc = getThisScriptSrc()
  let elems = []
  dynamicElems.forEach(element => { // eslint-disable-line
    if (element.dataset.scriptSrc === thisSrc) {
      elems.push(new ClassElem(element))
    }
  })
  return elems
}

export default createObjs
