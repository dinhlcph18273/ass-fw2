import styled from 'styled-components'
import "./Header.css"
import logo from "../../../assets/images/logo.png"
import { Breadcrumb, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { Input, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { BsHeadphones, BsPhone ,BsTablet} from "react-icons/bs";
import { AiOutlineLaptop, AiFillSetting} from "react-icons/ai";




const { Header, Sider, Content } = Layout;


const item3: MenuProps['items'] = [
  { key: "cellphone", icon: <BsPhone />, label: <Link to="/admin/phone">Điện thoại</Link> },
  { key: "laptop", icon: <AiOutlineLaptop />, label: "Laptop" },
  { key: "tablet", icon: <BsTablet />, label: "Máy tính bảng" },
  { key: "audio", icon: <BsHeadphones />, label: "Âm thanh" },
  // {
  //   key: "categories", icon: <SettingOutlined />,
  //   label: <Link to="/admin/categories">Categories</Link>
  // },
]
type Props = {}

const Head = (props: Props) => {
  return (
    <Layout>
      <Container>
         <Logo src={logo} />
         <Title>
          <Breadcrumb.Item>
            <Link to="" style={{color: "#fff", fontSize:16}}>
              Dashboard
            </Link>
          </Breadcrumb.Item>
         </Title>
         <Inputcustom size="large" placeholder="Nhập từ khóa tìm kiếm..." prefix={<SearchOutlined />} />

         <HelloName>Xin chào <b>Lê Công Định</b></HelloName>
      </Container>
      <Layout>
        <SiderCustom width={250} collapsible={true}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
        </SiderCustom>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
  </Layout>
       
  )
}

const Container = styled(Header)`
    background-color: #00B0D7 ;
    height: 64px;
    display: flex;
    align-items: center;  
`

const Logo = styled.img`
    width: 64px;
    height: 57px;
`

const Title = styled(Breadcrumb)`
  margin-left:10px ;
  margin-bottom: 0;

`
const Inputcustom = styled(Input)`
  width: 550px ;
  border-radius:10px ;
  margin-left:100px ;
`
const HelloName = styled.h3`
  color:white ;

  margin-left:400px ;
  margin-bottom:0 ;
`

const SiderCustom = styled(Sider)`
  background: #fff ;
`

export default Head