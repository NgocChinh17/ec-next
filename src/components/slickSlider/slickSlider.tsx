import React from "react"
import { Image } from "antd"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import hangmoive1 from "../../../public/assets/ImageProduct/hangmoive1.webp"

const MySlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
        </div>
        <div>
          <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
        </div>
        <div>
          <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
        </div>
      </Slider>
    </div>
  )
}

export default MySlider
