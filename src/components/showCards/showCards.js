// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./showCards.css";

const ShowCards = ({ card }) => {
  return (
    <>
      <div className="slider_block">
        <div className="cards">
          <div className="card_img">
            <img className="cards_img" src={card.img} alt="" />
          </div>
          <p>{card.title}</p>
          <p>{card.info}</p>
        </div>
      </div>
    </>
  );
};

export default ShowCards;
