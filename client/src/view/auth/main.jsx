import { BrowserRouter } from 'react-router-dom' // eslint-disable-line

import App from './components/App' // eslint-disable-line

if (DEV) console.log('Start main script')
if (DEV) console.log('-----------------')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))
