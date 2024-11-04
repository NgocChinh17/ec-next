"use client"
import React from "react"
import { Image } from "antd"

import { BannerPromotion } from "../banner/BannerPromotion"

import homePage1 from "../../../public/assets/image/homePage1.webp"
import paypalHomepage from "../../../public/assets/image/paypalHomepage.webp"
import sieutoc2h from "../../../public/assets/image/sieutoc2h.webp"
import camketHomepage from "../../../public/assets/image/camketHomepage.webp"
import BannerNewArrival from "../banner/BannerNewArrival"

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-5 gap-4">
        <div className="col-span-2 row-span-3 col-start-2">
          <Image src={homePage1.src} alt="homePage1" preview={false} />
        </div>
        <div className="col-span-2 col-start-4">
          <Image
            src={paypalHomepage.src}
            alt="paypalHomepage"
            preview={false}
            style={{ display: "inline-block" }}
          />
          <div style={{ float: "right" }}>
            <h3>Thanh Toán</h3>
            <p style={{ wordWrap: "break-word", width: "400px" }}>
              Khách hàng có thể lựa chọn một hoặc nhiều hình thức thanh toán
            </p>
          </div>
        </div>
        <div className="col-span-2 col-start-4 row-start-2">
          <Image
            src={sieutoc2h.src}
            alt="paypalHomepage"
            preview={false}
            style={{ display: "inline-block" }}
          />
          <div style={{ float: "right" }}>
            <h3>Siêu tốc 2H</h3>
            <p style={{ wordWrap: "break-word", width: "400px" }}>
              Chúng tôi cam kết hàng chính hãng và đảm bảo về chất lượng sản
              phẩm
            </p>
          </div>
        </div>
        <div className="col-span-2 col-start-4 row-start-3">
          <Image
            src={camketHomepage.src}
            alt="paypalHomepage"
            preview={false}
            style={{ display: "inline-block" }}
          />
          <div style={{ float: "right" }}>
            <h3>Cam kết chính hãng</h3>
            <p style={{ wordWrap: "break-word", width: "400px" }}>
              Chúng tôi cam kết hàng chính hãng và đảm bảo về chất lượng sản
              phẩm
            </p>
          </div>
        </div>
      </div>
      <BannerPromotion />
      <BannerNewArrival />
    </>
  )
}

export default Home
