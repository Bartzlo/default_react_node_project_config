import { BrowserRouter } from 'react-router-dom'

import App from './components/app'

console.log('Start main script')
console.log('-----------------')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))
