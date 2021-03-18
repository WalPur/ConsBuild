import { Link } from 'react-router-dom';
import './styles/navbar.css';
import logo from './images/IMG_1527.PNG';
import infoIcon from './images/Icons/IMG_1523.PNG';
import profileIcon from './images/Icons/IMG_1524.PNG';
import favIcon from './images/Icons/IMG_1521.PNG';
import cartIcon from './images/Icons/IMG_1526.PNG';

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
      <Link className="NavBarElement" to={{ pathname: `/cart`, fromDashBoard: false }}>
        <img className="NavIcon" src={cartIcon} alt='Логин' title="Вход" />
      </Link>
      <Link className="NavBarElement" to={{ pathname: `/about`, fromDashBoard: false }}>
        <img className="NavIcon" src={infoIcon} alt='О нас' title="О нас" />
      </Link>
    </div>
  );
}

export default NavBar;
