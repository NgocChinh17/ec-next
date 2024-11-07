import React from "react"
import { Card, Image } from "antd"

import productkhuyenmai from "../../../public/assets/image/productkhuyenmai.webp"

const BestSellingProducts = () => {
  return (
    <>
      <button
        style={{
          border: "1px solid black",
          padding: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          fontSize: 16,
          fontWeight: 600,
          marginLeft: "42%",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <span>Sản Phẩm Bán Chạy</span>
      </button>

      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <Image src={productkhuyenmai.src} alt="example" preview={false} />
          }
        >
          <div style={{ fontSize: 17, fontWeight: 500 }}>Name Sản Phẩm</div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giảm Giá:</span>{" "}
            250.000 vnd
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span> 200.000
            vnd
          </div>
        </Card>
      </div>
    </>
  )
}

export default BestSellingProducts
