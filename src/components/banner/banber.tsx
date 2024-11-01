import { Image, Carousel } from "antd"

import productkhuyenmai from "../../../public/assets/image/productkhuyenmai.webp"
import productkhuyenmai2 from "../../../public/assets/image/productkhuyenmai2.webp"
import productkhuyenmai3 from "../../../public/assets/image/productkhuyenmai3.webp"
import khuyenmai20 from "../../../public/assets/image/khuyenmai20.webp"

export const BannerPromotion = () => {
  return (
    <>
      <div
        className="grid grid-cols-6 grid-rows-1 gap-4"
        style={{ marginTop: -160 }}
      >
        <div className="col-span-4 col-start-2">
          <Image
            src="https://bizweb.dktcdn.net/100/459/658/themes/935500/assets/promotion_module_background.png?1728351069170"
            alt="banner"
            preview={false}
          />
          {/* <h2>Khuyến Mãi</h2> */}
        </div>
      </div>

      <div className="grid grid-cols-6 grid-rows-5 gap-4">
        <div className="row-span-4 col-start-2">
          <Carousel
            arrows
            infinite={true}
            draggable={true}
            autoplay={true}
            dots={false}
          >
            <div>
              <Image
                src={productkhuyenmai.src}
                alt="sliderHeader_1"
                preview={false}
                height={250}
                width="100%"
              />
              <div style={{ marginTop: 10 }}>
                <h2>Dầu gọi Keratin Smooth</h2>
                <h3>
                  <div>giảm Giá: 250.000 vnd</div>
                  <div>Giá: 200.000 vnd</div>
                </h3>
              </div>
            </div>

            <div>
              <Image
                src={productkhuyenmai2.src}
                alt="sliderHeader_2"
                preview={false}
                height={250}
                width="100%"
              />
              <div style={{ marginTop: 10 }}>
                <h2>Dầu gọi Keratin Smooth</h2>
                <h3>
                  <div>giảm Giá: 250.000 vnd</div>
                  <div>Giá: 200.000 vnd</div>
                </h3>
              </div>
            </div>

            <div>
              <Image
                src={productkhuyenmai3.src}
                alt="sliderHeader_2"
                preview={false}
                height={250}
                width="100%"
              />
              <div style={{ marginTop: 10 }}>
                <h2>Dầu gọi Keratin Smooth</h2>
                <h3>
                  <div>giảm Giá: 250.000 vnd</div>
                  <div>Giá: 200.000 vnd</div>
                </h3>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="col-span-3 row-span-4 col-start-3">
          <Image
            src={khuyenmai20.src}
            alt="khuyenmai20"
            preview={false}
            width={"100%"}
            height={330}
          />
        </div>
      </div>
    </>
  )
}
