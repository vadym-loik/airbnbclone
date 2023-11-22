import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';
import img7 from '../assets/img7.webp';
import like from '../assets/like.png';

import './main.style.css';

const data = [
  {
    photos: img1,
    like: like,
    name: 'Stege, Danemark',
  },
  {
    photos: img2,
    like: like,
    name: 'Ponta del Gada, Portugal',
  },
  {
    photos: img3,
    like: like,
    name: 'Drimnin, Royaume-Uni',
  },
  {
    photos: img4,
    like: like,
    name: 'Amsterdam, Pay-Bas',
  },
  {
    photos: img5,
    like: like,
    name: 'Stege, Danemark',
  },
  {
    photos: img6,
    like: like,
    name: 'Stege, Danemark',
  },
  {
    photos: img7,
    like: like,
    name: 'Stege, Danemark',
  },
];

const Main = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="main-wrap">
          {data.map((item) => {
            return (
              <div className="card">
                <img className="card-img" src={item.photos} alt="house" />
                <img className="card-icon" src={item.like} alt="like" />
                <p className="card-text">{item.name}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Main;
