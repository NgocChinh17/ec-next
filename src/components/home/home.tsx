"use client"
import React from "react"

import Banner1 from "../bannerHome/Banner1"
import BannerPromotion from "../bannerHome/BannerPromotion"
import BannerNewArrival from "../bannerHome/BannerNewArrival"
import BestSellingProducts from "../bannerHome/BestSellingProducts"
import FamousBrands from "../bannerHome/FamousBrands"
import LayoutAllProduct from "../bannerHome/LayoutAllProduct"

const Home = () => {
  return (
    <>
      <div style={{ marginLeft: 250, marginRight: 250 }}>
        <Banner1 />
        <BannerPromotion />
        <BannerNewArrival />
        <BestSellingProducts />
        <FamousBrands />
      </div>

      <div>
        <LayoutAllProduct />
      </div>
    </>
  )
}

export default Home
