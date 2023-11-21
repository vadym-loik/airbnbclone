import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';
import img5 from './assets/img5.webp';
import img6 from './assets/img6.webp';
import img7 from './assets/img7.webp';
import logo from './assets/logo.png';
import searchicon from './assets/searchicon.png';
import like from './assets/like.png';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <hr />
      <div className="container">
        <main className="main">
          <div className="main-wrap">
            <div className="card">
              <img className="card-img" src={img1} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Stege, Danemark</p>
            </div>
            <div className="card">
              <img className="card-img" src={img2} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Ponta del Gada, Portugal</p>
            </div>
            <div className="card">
              <img className="card-img" src={img3} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Stege, Danemark</p>
            </div>
            <div className="card">
              <img className="card-img" src={img4} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Stege, Danemark</p>
            </div>
            <div className="card">
              <img className="card-img" src={img5} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Stege, Danemark</p>
            </div>
            <div className="card">
              <img className="card-img" src={img6} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Stege, Danemark</p>
            </div>
            <div className="card">
              <img className="card-img" src={img7} alt="picture of house" />
              <img className="card-icon" src={like} />
              <p className="card-text">Stege, Danemark</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
