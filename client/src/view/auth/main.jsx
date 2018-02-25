import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

if (DEV) console.log('Start main script')
if (DEV) console.log('-----------------')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))
