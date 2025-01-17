import { useState, useEffect } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";


function Slider() {
  // const [slides, setSlides] = useState([]);
  // const [slideIndex, setSlideIndex] = useState(0);
  // const [index, setIndex] = useState(1);


  // useEffect(() => {
  //   const dataItems = document.querySelectorAll('.data-item');
  //   setSlides(dataItems);
  //   dataItems[0].classList.add('active');
  // }, [])


  // const showSlide = (index) => {
  //   slides[slideIndex].classList.remove('active');
  //   slides[index].classList.add('active');
  //   setSlideIndex(index);

  // }

  // const handleClickLeft = () => {
  //   setIndex(prevIndex => prevIndex - 1);

  //   if (index < 0) {
  //     setIndex(slides.length - 1)
  //   }

  //   showSlide(index);

  //   console.log(slideIndex)

  // };

  // const handleClickRight = () => {
  //   setIndex(prevIndex => prevIndex + 1); 
    
  //   if (index >= slides.length) {
  //     setIndex(0);
  //   }

  //   showSlide(index);

  //   console.log(slideIndex)
  // };



  return (
    <div className="slider">
      <div className="slider-prev">
        <img className="slider-prev-arrow slider-control" 
        src={arrowLeft} 
        alt="Переключить влево"
        // onClick={handleClickLeft}
        />
      </div>

      <div className="slider-next">
        <img className="slider-next-arrow slider-control" 
        src={arrowRight} 
        alt="Переключить вправо"
        // onClick={handleClickRight}
        />
      </div>
    </div>
  );
}

export default Slider;