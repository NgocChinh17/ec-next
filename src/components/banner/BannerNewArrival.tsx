import React from "react"
import { Image } from "antd"
import SliderCarousel from "../carousel/sliderCarousel"

const BannerNewArrival = () => {
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-auto gap-4">
        <div className="col-span-4 col-start-2">
          <Image
            src="https://bizweb.dktcdn.net/100/459/658/themes/935500/assets/new_module_background.png?1728351069170"
            alt="banner"
            preview={false}
          />
          {/* <h2>Hàng Mới về</h2> */}
        </div>

        <div className="row-span-1 col-start-2 col-span-4">
          <SliderCarousel />
        </div>
      </div>
    </>
  )
}

export default BannerNewArrival
