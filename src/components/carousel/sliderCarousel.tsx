import React from "react"
import { Carousel, Image } from "antd"

import hangmoive1 from "../../../public/assets/ImageProduct/hangmoive1.webp"

const contentStyle: React.CSSProperties = {
  margin: "0px 10px",
  height: "auto",
  color: "#fff",
  display: "flex",
  textAlign: "center",
  background: "#364d79",
}

const SliderCarousel = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <>
      <Carousel
        adaptiveHeight={true}
        afterChange={onChange}
        slidesToShow={4}
        draggable
        dots={false}
      >
        <div style={{ background: "red" }}>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
        </div>
        <div>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
        </div>
        <div>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
        </div>
        <div>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
        </div>
      </Carousel>
    </>
  )
}

export default SliderCarousel
