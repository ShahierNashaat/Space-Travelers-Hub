import { NavLink } from 'react-router-dom';
import LOGO from './assets/images/planet.png';

const Navbar = () => {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/Space-Travelers-Hub';
  };
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/Space-Travelers-Hub">
            <img src={LOGO} alt="logo" />
          </NavLink>
          <NavLink to="/Space-Travelers-Hub">
            <h1>Space Travelers&apos; Hub</h1>
          </NavLink>
        </div>

        <ul>
          <li>
            {' '}
            <NavLink to="/Space-Travelers-Hub" activeClassName="active" isActive={checkActive}>Rockets</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/Space-Travelers-Hub/Missions">Missions</NavLink>
          </li>
          |
          <li><NavLink to="/Space-Travelers-Hub/My Profile">My Profile</NavLink></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};
export default Navbar;
