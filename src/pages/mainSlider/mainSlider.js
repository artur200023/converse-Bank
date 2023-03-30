import img from "../../images";
import DefaultLayouts from "../../layouts/DefaultLayouts";
import React, { useEffect } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  blockSelect,
  getBlocksFetch,
} from "../../redux/slices/mainSliderBlocksSlice/mainSliderBlocksSlice";
import { CustomDots } from "./utils";
import "./mainSlider.css";
import Calculate from "../../components/calculator";
import Deposit from "../../components/calculateDeposit";
import Percent from "../../components/percent";
import {
  cardSelect,
  getCardsFetch,
} from "../../redux/slices/cardSliderSlice/cardSliderSlice";
import ShowCards from "../../components/showCards/showCards";
import Blog from "../../components/blog/blog";
import Mobile from "../../components/coverseMobile/converseMobile";

const MainSlider = ({}) => {
  const blocks = useSelector(blockSelect);
  const cards = useSelector(cardSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlocksFetch());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCardsFetch());
  }, [dispatch]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="slider_dots">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div>
        {blocks.length && (
          <CustomDots
            key={blocks[i].id}
            dotsTitile={blocks[i].title}
            dotsDec={blocks[i].disc}
            blocks={blocks[i]}
          />
        )}
      </div>
    ),
  };

  let settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <DefaultLayouts>
        {/* <div className="container"> */}
          <div className="main_slider">
            <Slider {...settings}>
              <div className="slider_block">
                <div className="slider_img">
                  <img src={img.image1_slider} alt="" />
                </div>
                <div className="info_block">
                  <h1>Անվճար քարտ նոր և գործող վարկերի համար</h1>
                  <h5>
                    եթե ունես գործող ավանդ կամ ուզում ես նորը ներդնել,ապա այս
                    առաջարկը հենց քեզ համար է:
                  </h5>
                  <button className="info_btn">Ավելին</button>
                </div>
              </div>
              <div className="slider_block">
                <div className="slider_img">
                  <img src={img.image1_slider} alt="" />
                </div>
                <div className="info_block">
                  <h1>Անվճար քարտ նոր և գործող վարկերի համար</h1>
                  <h5>
                    եթե ունես գործող ավանդ կամ ուզում ես նորը ներդնել,ապա այս
                    առաջարկը հենց քեզ համար է:
                  </h5>
                  <button className="info_btn">Ավելին</button>
                </div>
              </div>
              <div className="slider_block">
                <div className="slider_img">
                  <img src={img.image1_slider} alt="" />
                </div>
                <div className="info_block">
                  <h1>Անվճար քարտ նոր և գործող վարկերի համար</h1>
                  <h5>
                    եթե ունես գործող ավանդ կամ ուզում ես նորը ներդնել,ապա այս
                    առաջարկը հենց քեզ համար է:
                  </h5>
                  <button className="info_btn">Ավելին</button>
                </div>
              </div>
              <div className="slider_block">
                <div className="slider_img">
                  <img src={img.image1_slider} alt="" />
                </div>
                <div className="info_block">
                  <h1>Անվճար քարտ նոր և գործող վարկերի համար</h1>
                  <h5>
                    եթե ունես գործող ավանդ կամ ուզում ես նորը ներդնել,ապա այս
                    առաջարկը հենց քեզ համար է:
                  </h5>
                  <button className="info_btn">Ավելին</button>
                </div>
              </div>
            </Slider>
          </div>
          <Calculate />

          <div className=" container calc_comp">
            <Deposit />
            <Percent />
          </div>

          <div className="cardBlock_slider">
            <div className="card">
              <Slider {...settings1}>
                {cards.length &&
                  cards.map((card) => (
                    <ShowCards
                      key={card.id}
                      card={card}
                      title={card.title}
                    ></ShowCards>
                  ))}
              </Slider>
            </div>
          </div>
          <Blog />
          <Mobile />
        {/* </div> */}
      </DefaultLayouts>
    </>
  );
};

export default MainSlider;
