import { Button } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { GetCart } from "../../feartures/cart/cartSlice";
import { currency } from "../../utils/hel";
import Menu from "../Menu";
import CartItem from "./CartItem";

type Props = {};

const Cart = (props: Props) => {
  const { cart, total } = useAppSelector(GetCart);
  return (
    <div>
      <Menu />
      <Title>
        <Button
          icon={<AiOutlineLeft />}
          style={{ border: "none", fontWeight: "bold", padding: 0 }}
        >
          <Link to="/" style={{ color: "red" }}>
            Trở về
          </Link>
        </Button>
        <h2 style={{ color: "red" }}>Giỏ hàng</h2>
        <div></div>
      </Title>
      <Content>
        {cart?.map((item: any, index: any) => (
          <CartItem data={item} key={index} />
        ))}
        <Footer>
          <TotalText>Tổng tiền tạm tính:</TotalText>
          <TotalPrice>{currency(total)}</TotalPrice>
        </Footer>
        <Button
          style={{
            width: "100%",
            border: "1px solid red",
            color: "white",
            background: "#D70018",
            textTransform: "uppercase",
            height: 50,
          }}
        >
          <Link to="/checkout">Tiến hành đặt hàng</Link>
        </Button>
        <Button
          style={{
            width: "100%",
            border: "1px solid red",
            textTransform: "uppercase",
            height: 50,
            marginBottom: "10vh",
            color: "red",
          }}
        >
          <Link to="">Chọn thêm sản phẩm khác</Link>
        </Button>
      </Content>
    </div>
  );
};

const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TotalText = styled.div`
  font-weight: bold;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  color: red;
  font-weight: bold;
`;

export default Cart;
