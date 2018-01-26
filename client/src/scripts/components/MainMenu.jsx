import { Link } from 'react-router-dom'

const MainMenu = (props) => (
  <nav>
    <h3>Main menu</h3>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/private-page">Private</Link>
      </li>
      <li>
        <Link to="/public-page">Public</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  </nav>
)

export default MainMenu
