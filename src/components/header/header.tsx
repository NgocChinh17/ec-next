// Header.tsx
"use client"
import {
  HistoryOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Badge, Divider, Dropdown, Input, Popover } from "antd"
import Link from "next/link"

const { Search } = Input
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Tài Khoản Của Tôi",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Thôn tin tài khoản",
    icon: <ProfileOutlined />,
  },
  {
    key: "3",
    label: "Lịch Sử Mua Hàng",
    icon: <HistoryOutlined />,
  },
  {
    key: "4",
    label: <Link href="/auth/login">Đăng Nhập</Link>,
    icon: <LogoutOutlined />,
  },
]
//show cart
const text = <span>Giỏ Hàng Của Tôi</span>
const content = (
  <div>
    <span>image</span> <span>title</span>
  </div>
)

//menu
const listMenu = [
  {
    key: "1",
    label: <Link href="/">Trang Chủ</Link>,
  },
  {
    key: "2",
    label: "Giới Thiệu",
  },
  {
    key: "3",
    label: "Sản Phẩm",
  },
  {
    key: "4",
    label: "Liên hệ",
  },
  {
    key: "5",
    label: "Tin Tức",
  },
  {
    key: "6",
    label: "Giỏ Hàng",
  },
  {
    key: "7",
    label: (
      <Popover
        title={
          <Search
            placeholder="input search text"
            // onSearch={onSearch}
            style={{ width: 200 }}
          />
        }
        placement="bottom"
        trigger="click"
        // open={open}
        // onOpenChange={handleOpenChange}
      >
        <SearchOutlined />
      </Popover>
    ),
  },
  {
    key: "9",
    label: (
      <Popover placement="bottom" title={text} content={content}>
        <Badge size="small" count={5}>
          <ShoppingCartOutlined style={{ fontSize: 20 }} />
        </Badge>
      </Popover>
    ),
  },
  {
    key: "8",
    label: (
      <Dropdown trigger={["click"]} menu={{ items }}>
        <UserOutlined />
      </Dropdown>
    ),
  },
]
const Header = () => {
  // const [open, setOpen] = useState(false)

  // const handleOpenChange = (newOpen: boolean) => {
  //   setOpen(newOpen)
  // }

  //profile

  const renderHeader = listMenu.map((item) => (
    <div key={item.key}>{item.label}</div>
  ))

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 250px -10px 250px",
          fontSize: 20,
          cursor: "pointer",
        }}
      >
        {renderHeader}
      </div>
      <Divider />
    </>
  )
}

export default Header
