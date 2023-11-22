import logo from '../assets/logo.png';
import searchicon from '../assets/searchicon.png';
import './header.style.css';

const Header = (props) => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-wrap">
          <img src={logo} alt="logo AirBnb" width="150" />
          <div className="search">
            <input className="search-input" type="text" />
            <img className="search-icon" src={searchicon} />
          </div>
          <a href="" className="header-link">
            Metter mon logement sur Airbnb
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
