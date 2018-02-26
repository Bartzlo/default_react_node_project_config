import { Link } from 'react-router-dom'

const MainMenu = (props) => (
  <nav className="main-menu">
    <h3 className="main-menu_header">Main menu</h3>
    <ul className="main-menu__list">
      <li className="main-menu__item">
        <Link to="/">Home</Link>
      </li>
      <li className="main-menu__item">
        <Link to="/admin">Admin page</Link>
      </li>
      <li className="main-menu__item">
        <Link to="/public-page">Public</Link>
      </li>
      <li className="main-menu__item">
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  </nav>
)

export default MainMenu
