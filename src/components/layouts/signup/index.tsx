import { Button, Form, Input, InputNumber, message } from "antd";
import logo from "../../../assets/images/logo.png";
import fb from "../../../assets/images/fb.png";
import gg from "../../../assets/images/gg.png";
import styled from "styled-components";
import { useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../feartures/user/userSilice";
import "./signup.css";

type Props = {};

const Signup = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(createUser({ ...values, role: 1 }))
      .then(() => {
        message.success("Đăng ký thành công");
        navigate("/signin");
      })
      .catch((error: any) => {
        message.success(error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Login>
        <Wraper>
          <LoginForm>
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your E-mail!" },
                  { type: "email", message: "Email is not a valid E-mail!" },
                ]}
              >
                <Input style={{ width: 300 }} minLength={10} />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[
                  { required: true, message: "Please input your Phone!" },
                ]}
                labelCol={{span: 8}}
              >
                <InputNumber style={{ width: 300 }} />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                labelCol={{span: 6}}

              >
                <Input.Password style={{ width: 300 }} />
              </Form.Item>

              <Form.Item
                wrapperCol={{ span: 16 }}
                style={{ marginTop: 45 }}
              >
                <Button type="primary" htmlType="submit" danger style={{width:300, borderRadius:5}}>
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
            <MainLogin>
              <p>Hoặc đăng nhập bằng</p>
              <ul style={{ padding: 0 }}>
                <LoginWith>
                  <a href="">
                    <img src={fb} alt="" style={{ width: "70%" }} />
                  </a>
                </LoginWith>
                <LoginWith>
                  <a href="">
                    <img src={gg} alt="" style={{ width: "70%" }} />
                  </a>
                </LoginWith>
              </ul>
            </MainLogin>
          </LoginForm>
          <LoginLogo>
            <img src={logo} alt="" width={150} />
          </LoginLogo>
        </Wraper>
      </Login>
    </Container>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
`;
const Login = styled.div`
  padding-top: 100px;
`;
const Wraper = styled.div`
  background: #f8f8f8;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: auto;
  border-radius: 10px;
`;
const LoginForm = styled.div`
  background: #fff;
  padding: 100px;
  border-radius: 10px;
`;
const MainLogin = styled.div`
  margin-top: 40px;
  text-align: center;
`;
const LoginWith = styled.li`
  display: inline-block;
`;
const LoginLogo = styled.div`
  padding: 0 50px;
`;
export default Signup;
