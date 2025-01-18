import { useRef, useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import DataItem from "../DataItem";
import Slider from "react-slick";

function DataList({ data, date }) {
  let sliderRef = useRef(null);
  const [prevSlide, setPrevSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const urlDate = date.slice(0, 10).split('-').join('/');
  const outputDate = date.slice(0, 10).split('-').reverse().join('-');
  
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setPrevSlide(current);
      setCurrentSlide(next);
    },
  };
  
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <>
      <ul className="data-list">
        <Slider ref={slider => { sliderRef = slider; }} {...settings}>
          {data.map(item => {
            return (
              <DataItem key={item.identifier} urlDate={urlDate} outputDate={outputDate} item={item} />
            );
          })}
        </Slider>
      </ul>

      <div className="slider-nav">
        <div className="slider-prev">
          <img className="slider-prev-arrow"
            src={arrowLeft}
            alt="Переключить влево"
            onClick={previous}
          />
        </div>
        <div class="slider-counter">{currentSlide + 1} / {data.length}</div>
        <div className="slider-next">
          <img className="slider-next-arrow"
            src={arrowRight}
            alt="Переключить вправо"
            onClick={next}
          />
        </div>
      </div>
    </>
  );
}

export default DataList;