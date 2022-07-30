import './appHeader.scss';
import { Link, NavLink} from 'react-router-dom';

const AppHeader = () => {
  let activeStyle = {
    color: 'red',
  fontSize: '45px'};
    return (
      <header className="app__header">
        <h1 className="app__title">
          <Link to="#">
            <span>НОВИНИ</span> інформаційний портал
          </Link>
        </h1>
        <nav className="app__menu">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                УКРАЇНА
              </NavLink>
            </li>
            /
            <li>
              <NavLink
                to="eur"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                МІЖНАРОДНІ
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default AppHeader;
