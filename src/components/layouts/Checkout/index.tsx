import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clear, GetCart, orderCart } from "../../../feartures/cart/cartSlice";
import { currency } from "../../../utils/hel";
import Footer from "../../Footer";
import Menu from "../../Menu";
import * as S from "./styled";

type Props = {};

const Checkout = (props: Props) => {
  const dispatch = useAppDispatch()
  const { cart, total } = useAppSelector(GetCart);
  const onFinish = (values: any) => {
    dispatch(orderCart({products: cart, infor: values, status:1, total:total}))
    dispatch(clear())
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Menu />
      <S.Title>
        <Button
          icon={<AiOutlineLeft />}
          style={{ border: "none", fontWeight: "bold", padding: 0 }}
        >
          <Link to="/cart" style={{ color: "red" }}>
            Trở về
          </Link>
        </Button>
        <h2 style={{ color: "red" }}>Thông tin đặt hàng</h2>
        <div></div>
      </S.Title>
      <S.Container>
        <Typography.Title level={4} style={{paddingTop:20}}>Thông tin khách hàng</Typography.Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa chỉ email"
            name="email"
            rules={[
              { type: "email", message: "Vui lòng nhập email" },
              { required: true, message: "Vui lòng nhập thông tin" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ghi chú" name="note">
            <Input.TextArea rows={5} />
          </Form.Item>
          <S.TotalPrice>
            <span>Tổng tiền tạm tính:</span>
            <h2>{currency(total)}</h2>
          </S.TotalPrice>
          <S.ButtonGroup>
            <Button type="primary" htmlType="submit" danger>
              Đặt hàng
            </Button>
            <Button danger>
              <Link to="/">Chọn thêm sản phẩm khác</Link>
            </Button>
          </S.ButtonGroup>
        </Form>
      </S.Container>
      <Footer />
    </div>
  );
};

export default Checkout;
