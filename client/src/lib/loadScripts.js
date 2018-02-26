if (DEV) console.log('Execute loadScripts.js')

let dynamicElems = document.querySelectorAll('[data-script-src]')
let scripts = {}

dynamicElems.forEach(element => {
  scripts[element.dataset.scriptSrc] = true
})

for (const src in scripts) {
  if (scripts.hasOwnProperty(src)) {
    let script = document.createElement('script')
    script.src = src
    script.dataset.src = src
    document.body.appendChild(script)
  }
}

export default dynamicElems
