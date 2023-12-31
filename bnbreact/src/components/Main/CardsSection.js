import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';
import img7 from '../../assets/img7.webp';
import like from '../../assets/like.png';
import { v4 as uuidv4 } from 'uuid';

import './cardsSection.css';
import Card from '../Card/Card';

const cardsData = [
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

const CardsSection = () => {
  return (
    <section className="container">
      <main className="main">
        <div className="main-wrap">
          {cardsData.map((item) => {
            return <Card key={uuidv4()} cardItem={item} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default CardsSection;
