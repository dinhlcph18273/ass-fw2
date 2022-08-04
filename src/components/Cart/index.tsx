import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { GetCart } from "../../feartures/cart/cartSlice";
import CartItem from "./CartItem";

type Props = {};

const Cart = (props: Props) => {
  const { cart, total } = useAppSelector(GetCart);
  console.log(useAppSelector(GetCart));
  
  return (
    <div>
      <Title>
        <h2>Giỏ hàng</h2>
      </Title>
      <Content>
        {cart?.map((item: any, index: any) => (
          <CartItem data={item} key={index} />
        ))}
        <Footer>
          <TotalText>Tổng số tiền</TotalText>
          <TotalPrice>{total} ₫</TotalPrice>
        </Footer>
      </Content>
    </div>
  );
};

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 1px solid #acacac;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #acacac;
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
