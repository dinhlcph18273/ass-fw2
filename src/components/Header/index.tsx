import {
  ClockCircleOutlined,
  DropboxOutlined,
  HomeOutlined,
  LaptopOutlined,
  PhoneOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";

import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { getProductByCategory } from "../../feartures/products/productsSlice";
import styled from "styled-components";

import Banner from "../../assets/images/banner.png"

type Props = {};
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Tất cả", 0, <DropboxOutlined />),
  getItem("Điện thoại", 1, <PhoneOutlined />),
  getItem("Laptop", 2, <LaptopOutlined />),
  getItem("Máy tính bảng", 3, <TabletOutlined />),
  getItem("Âm thanh", 4, <TabletOutlined />),
  getItem("Đồng hồ", 2, <ClockCircleOutlined />),
  getItem("Nhà Thông Minh", 1, <HomeOutlined />),
];

const Header = (props: Props) => {
  const dispatch = useAppDispatch();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e.key);
    dispatch(getProductByCategory(e.key));
  };
  return (
    <Siderbar>
      <MenuItem
        style={{ width: 256 }}
        mode="vertical"
        items={items}
        onClick={onClick}
      />
      <img src={Banner} alt="" width={`70%`}/>
    </Siderbar>
  );
};

const Siderbar = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const MenuItem = styled(Menu)`
  display: flex;
  flex-direction: column;
`;

export default Header;
