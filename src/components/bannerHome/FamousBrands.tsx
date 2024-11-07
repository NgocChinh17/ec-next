import React from "react"
import { Card, Carousel, Image } from "antd"

import logo1 from "../../../public/assets/brandLogo/logo1.webp"
import logo2 from "../../../public/assets/brandLogo/logo2.webp"

const FamousBrands = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <>
      <div
        className="slider-container"
        style={{
          fontSize: 30,
          fontWeight: 500,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Thương Hiệu Nổi Tiếng
      </div>

      <Carousel
        adaptiveHeight={true}
        afterChange={onChange}
        slidesToShow={4}
        draggable
        dots={false}
        style={{ marginBottom: 20 }}
      >
        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={logo1.src} preview={false} />}
            title={false}
          />
        </div>

        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={logo1.src} preview={false} />}
            title={false}
          />
        </div>

        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={logo2.src} preview={false} />}
            title={false}
          />
        </div>

        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={logo2.src} preview={false} />}
            title={false}
          />
        </div>
      </Carousel>
    </>
  )
}

export default FamousBrands
