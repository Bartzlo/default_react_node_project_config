function wait (elemContainerName) {
  return new Promise((resolve, reject) => {
    check(50, elemContainerName, resolve, reject)
  })
}

function check (tryCounter, elemContainerName, resolve, reject) {
  if (tryCounter < 0) {
    reject(new Error('Script not loaded - ' + elemContainerName + '.js'))
    return
  }

  if (window[elemContainerName]) {
    resolve(window[elemContainerName])
    return
  }

  console.log('Waiting for script download: ' + elemContainerName + '.js ' + tryCounter + ' retries left')

  setTimeout(() => {
    check(tryCounter - 1, elemContainerName, resolve, reject)
  }, 300)
}

export default wait
