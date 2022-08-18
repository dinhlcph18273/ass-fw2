import styled from "styled-components";
import logo from "../../../../assets/images/logo.png";
import { Breadcrumb } from "antd";
import { Input, Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { useAppDispatch } from "../../../../app/hooks";
import { signOut } from "../../../../feartures/user/userSilice";

const { Header } = Layout;

type Props = {};

const Head = (props: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(signOut())
    navigate('/signin')
  }
  return (
    <Container>
      <Logo src={logo} />
      <Title>
        <Breadcrumb.Item>
          <Link to="" style={{ color: "#fff", fontSize: 16 }}>
            Dashboard
          </Link>
        </Breadcrumb.Item>
      </Title>
      <Inputcustom
        size="large"
        placeholder="Nhập từ khóa tìm kiếm..."
        prefix={<SearchOutlined />}
      />

      <HelloName>
        Xin chào <b>Admin</b>
        <AiOutlineLogout onClick={handleLogout}/>
      </HelloName>
    </Container>
  );
};

const Container = styled(Header)`
  background-color: #00b0d7;
  height: 64px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
  height: 57px;
`;

const Title = styled(Breadcrumb)`
  margin-left: 10px;
  margin-bottom: 0;
`;
const Inputcustom = styled(Input)`
  width: 550px;
  border-radius: 10px;
  margin-left: 100px;
`;
const HelloName = styled.h3`
  color: white;
  margin-left: 400px;
  margin-bottom: 0;
`;

export default Head;
