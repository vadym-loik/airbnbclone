import './card.css';

const Card = (props) => {
  const { cardItem } = props;

  return (
    <div>
      <div className="card">
        <img className="card-img" src={cardItem.photos} alt="house" />
        <img className="card-icon" src={cardItem.like} alt="like" />
        <p className="card-text">{cardItem.name}</p>
      </div>
    </div>
  );
};

export default Card;
