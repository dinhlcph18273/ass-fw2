import * as S from "./Admin.styled";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";
import { BsHeadphones, BsPhone, BsTablet } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import Head from "./components/Header";
import styled from "styled-components";
const { Content, Sider } = Layout;

const item: MenuProps["items"] = [
  {
    key: "cellphone",
    icon: <BsPhone />,
    label: <Link to="/admin">Điện thoại</Link>,
  },
  { key: "laptop", icon: <AiOutlineLaptop />, label: <Link to="/admin/order">Order</Link> },
  { key: "tablet", icon: <BsTablet />, label: "Máy tính bảng" },
  { key: "audio", icon: <BsHeadphones />, label: "Âm thanh" },
  // {
  //   key: "categories", icon: <SettingOutlined />,
  //   label: <Link to="/admin/categories">Categories</Link>
  // },
];
type Props = {};

const Admin = (props: Props) => {
  return (
    <S.Container>
      <Layout>
        <Head />
        <Layout>
          <SiderCustom width={250}>
            <Menu
              mode="vertical"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={item}
            />
          </SiderCustom>
          <Contentcustom>
            <Outlet />
          </Contentcustom>
        </Layout>
      </Layout>
    </S.Container>
  );
};

const SiderCustom = styled(Sider)`
  background: #fff;
`;

const Contentcustom = styled(Content)`
  width: 75%;
  padding: 30px;
  padding-right: 0;
  background: linear-gradient(to right, #e5e5e9, #ffffff 100%);
`;

export default Admin;
