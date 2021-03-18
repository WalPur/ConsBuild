import { Link } from 'react-router-dom';
import './styles/navbar.css';
import logo from './images/лого.PNG';
import infoIcon from './images/Icons/info.PNG';
import profileIcon from './images/Icons/profile.PNG';
import favIcon from './images/Icons/fav.PNG';
import loginIcon from './images/Icons/login.PNG';

function NavBar() {
  return (
    <div className="NavBar">
      <Link className="NavBarElement" to={{ pathname: `/`, fromDashBoard: false }}>
        <img className="LogoImg" src={logo} alt='Логотип' title="На главную" />
      </Link>
      <Link className="NavBarElement" to={{ pathname: `/profile`, fromDashBoard: false }}>
        <img className="NavIcon" src={profileIcon} alt='Профиль' title="Личный кабинет" />
      </Link>
      <Link className="NavBarElement" to={{ pathname: `/fav`, fromDashBoard: false }}>
        <img className="NavIcon" src={favIcon} alt='Избранные' title="Избранные" />
      </Link>
      <Link className="NavBarElement" to={{ pathname: `/login`, fromDashBoard: false }}>
        <img className="NavIcon" src={loginIcon} alt='Логин' title="Вход" />
      </Link>
      <Link className="NavBarElement" to={{ pathname: `/about`, fromDashBoard: false }}>
        <img className="NavIcon" src={infoIcon} alt='О нас' title="О нас" />
      </Link>
    </div>
  );
}

export default NavBar;